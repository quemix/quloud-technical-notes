.. _lt-structure-input:

構造の標準化と計算入力
======================

格子還元・結晶学的標準化で何が変わるかを整理し、構造ファイルや計算ソフトで
格子ベクトルと原子座標をどう指定するかを確認する。最後に、FCCの変換をNumPyで検算する。

**前提知識**: :ref:`lattice-transform` の基底変換・Cartesian回転と、
:ref:`lt-cell-transform` の基本単位胞と超胞。

.. _lt-standardize-cell:

格子還元と結晶学的標準化
------------------------------------

Niggli還元は格子の計量に基づき、同じ格子を簡潔な基底で表す手続きである。原子配置を含む結晶学的標準化は対称性を探索し、選んだ空間群設定に基づく標準慣用単位胞または基本単位胞を構成する。目的と入力情報が異なる。

spglibの `standardize_cell <https://spglib.readthedocs.io/en/stable/api/autodoc/spglib.cell.html#spglib.cell.standardize_cell>`_ は ``to_primitive=True`` で基本単位胞、``to_primitive=False``\ （既定値）で標準慣用単位胞を返す。``no_idealize=False``\ （既定値）では、対称性に合わせて格子定数や原子位置が調整されることがある。歪みや緩和後の数値を保持したい場合は ``no_idealize=True`` を検討する。ただしこの指定は理想化を止めるもので、対称性探索を止めるものではない。入力構造に対して ``symprec`` と ``angle_tolerance`` が適切か、許容差を変えたときに検出対称性が安定するかも確認する。

spglibは対称性判定結果に基づいて原子順序やCartesianの向きを変える場合があり、標準化結果だけで物理的同一性を完全に判定できるわけではない。spglibのPython APIは格子ベクトルを\ **行**\ として受け取るため、列ベクトル規約との対応を明示する。

.. _lt-input-formats:

計算ソフトと構造ファイル
------------------------------------

.. _lt-cif:

CIF
^^^

CIFは通常、セルの長さ・角度と分率座標を記録し、空間群情報や対称操作を含む場合は非対称単位から原子を展開できる。提供された座標がすでに完全な単位胞なのか、非対称単位だけなのかを確認する。部分占有は通常の整数個の原子配置とは異なり、組成や無秩序をどうモデル化するか別途決める。セル定数だけからCartesianの絶対方位は定まらない。慣用単位胞の定義は `IUCr Online Dictionary <https://dictionary.iucr.org/Conventional_cell>`_ を参照。

.. _lt-quantum-espresso:

Quantum ESPRESSO
^^^^^^^^^^^^^^^^^

Quantum ESPRESSO 7.5の公式 `INPUT_PW <https://www.quantum-espresso.org/Doc/INPUT_PW.html>`_ によると、``ibrav=0`` は ``CELL_PARAMETERS`` でセルを与え、``ibrav>0`` はQEが定義するBravais格子のベクトルを使う。``ATOMIC_POSITIONS crystal`` は、``ibrav`` または ``CELL_PARAMETERS`` によって指定された計算セルの3本の格子ベクトルに対する分率座標である。``ibrav=0`` では超胞を直接指定することもできる。例えば ``ibrav=2`` のベクトルは :math:`\frac a2(-1,0,1)`、:math:`\frac a2(0,1,1)`、:math:`\frac a2(-1,1,0)` であり、FCC基本単位胞を使うが、:ref:`lt-fcc-cell` の :math:`P_{\rm F}` の取り方とは軸向きが異なる。引数が負の設定もあり、例えば ``ibrav=-3`` は体心立方格子の別の対称的な軸設定を表す。符号だけからベクトルの向きや原点を推測せず、公式表の定義を使う。計算セルを変更したときは、分率座標や方向指数をそのまま引き継がず、対応する基底変換を行う。格子成分、原子位置の単位、格子定数の単位を明示し、Bohr、Å、``alat`` を混ぜない。

.. _lt-spr-kkr:

SPR-KKR
^^^^^^^

SPR-KKRは結晶・薄膜・表面などの計算形態に応じた構造入力を持つ。公開されている `SPR-KKR User Guide <https://sprkkr.org/?download_id=3257&sdm_process_download=1>`_ の層構造の例では、格子ベクトルと原子位置の記述がバルク結晶のポテンシャル入力と同じ形式ではない。したがって、ファイル種別・マニュアル版・計算モードを特定せずに、ベクトルの行列配置や角度パラメータを一律に断定しない。

実際の入力では対象バージョンのマニュアルと動作例を確認し、結晶方向（例えば :math:`[001]_{\rm c}`）、Cartesian方向、磁化方向のどれを指定しているかを特定する。MAEやtorqueの方向を扱う際は、格子の軸変換だけでなくCartesian磁化ベクトルも同じ座標変換と整合させる。

.. _lt-lammps:

LAMMPS
^^^^^^

LAMMPSの `triclinic box documentation <https://docs.lammps.org/Howto_triclinic.html>`_ は一般三斜セルとrestricted triclinic boxを区別する。一般形式は右手系の任意方向の辺ベクトルで与えられ、restricted形式では :math:`\boldsymbol a=(l_x,0,0)`、:math:`\boldsymbol b=(xy,l_y,0)`、:math:`\boldsymbol c=(xz,yz,l_z)` と軸を揃える。LAMMPSは一般形式からrestricted形式へ移す際、箱を回転し、原子座標や速度などのCartesian量にも同じ回転を適用する。内部計算ではrestricted形式を使う。:math:`xy,xz,yz` はtilt factorsである。

入力・出力形式やコマンドによって一般形式を指定できる範囲が異なる。超胞生成は別途行列 :math:`M` に基づいて周期像を作る。箱だけを回して原子位置・速度・その他のベクトルを据え置くと、元の構造を保たない。テンソルや外場を含む計算では、どの量がセル座標系とともに変換されるかを個別に確認する。

.. _lt-array-conventions:

実装上の配列規約
------------------------

本稿の列規約では :math:`A` の各列が格子ベクトルで、Cartesian位置は :math:`\boldsymbol r=A\boldsymbol s`。spglibのPython APIやASEの `Cell <https://docs.ase-lib.org/ase/cell.html>`_ は3本の格子ベクトルを行として並べるため、対応は ``lattice_rows = A.T`` である。原子座標を行配列 ``positions_rows`` として渡す場合、Cartesian座標の行配列は ``positions_rows @ lattice_rows`` になる。

列形式の式をNumPyの行配列へ移すときは転置も式の一部として扱う。格子行配列 :math:`L=A^{\mathsf T}` の基底変更は :math:`L'=P^{\mathsf T}L`、分率座標の行配列は :math:`S'=SP^{-\mathsf T}` となる。配列のshapeだけを見て乗算順を推測しない。

.. _lt-numerical-check:

数値検証
------------

次の短いNumPy例は、FCC変換、回転、超胞、逆格子の双対性をまとめて検算する。格子ベクトルは基底変換の式と同様に\ **列**\ で保持し、原子座標も列ベクトルとする。ASEやspglibなど行に格子ベクトルを持つAPIへ渡すときは、:ref:`前節<lt-array-conventions>` のとおり ``A.T`` とする。

.. code-block:: python

   from itertools import product
   import numpy as np

   a = 4.0  # Angstrom
   A = a * np.eye(3)
   P = 0.5 * np.array([[0, 1, 1], [1, 0, 1], [1, 1, 0]])
   Ap = A @ P
   assert np.isclose(np.linalg.det(A), 64.0)
   assert np.isclose(abs(np.linalg.det(Ap)), 16.0)

   # 基本並進ベクトルの長さと相互の角度
   G = Ap.T @ Ap
   assert np.allclose(np.sqrt(np.diag(G)), 2 * np.sqrt(2))
   assert np.isclose(np.degrees(np.arccos(G[0, 1] / G[0, 0])), 60.0)

   # 面心位置と方向の基本並進ベクトルの組表示
   s_primitive = np.linalg.solve(P, np.array([0.0, 0.5, 0.5]))
   u_primitive = np.linalg.solve(P, np.array([0.0, 0.0, 1.0]))
   assert np.allclose(s_primitive, [1, 0, 0])
   assert np.allclose(u_primitive, [1, 1, -1])

   # 逆格子
   Bp = 2 * np.pi * np.linalg.inv(Ap).T
   assert np.allclose(Ap.T @ Bp, 2 * np.pi * np.eye(3))

   # z軸まわりの任意角の回転
   theta = 0.37
   Q = np.array([[np.cos(theta), -np.sin(theta), 0],
                 [np.sin(theta),  np.cos(theta), 0],
                 [0, 0, 1]])
   assert np.allclose(Q.T @ Q, np.eye(3))
   assert np.allclose((Q @ Ap).T @ (Q @ Ap), G)

   # 超胞: 12個の周期像と、周期境界込みの最短原子間距離
   M = np.diag([2, 3, 2])
   As = Ap @ M
   assert np.isclose(abs(np.linalg.det(As)), 12 * 16.0)
   S = [np.linalg.solve(M, n) for n in product(range(2), range(3), range(2))]
   assert len(S) == 12
   d_min = min(np.linalg.norm(As @ (sj - si + np.array(n)))
               for i, si in enumerate(S) for j, sj in enumerate(S)
               for n in product(range(-1, 2), repeat=3)
               if not (i == j and n == (0, 0, 0)))
   assert np.isclose(d_min, 2 * np.sqrt(2))

行列式から慣用単位胞 :math:`64\,\mathrm{\mathring{A}}^3`、基本単位胞 :math:`16\,\mathrm{\mathring{A}}^3`、超胞 :math:`192\,\mathrm{\mathring{A}}^3` を得る。FCC基本並進ベクトル長は :math:`4/\sqrt2=2\sqrt2\,\mathrm{\mathring{A}}`、相互の角度は :math:`60^\circ`、面心点は基本単位胞の分率座標 :math:`(1,0,0)`、方向は :math:`(1,1,-1)` となる。任意角（例では :math:`\theta=0.37` rad）の回転で計量行列は変わらず、逆格子は :math:`A_{\rm p}^{\mathsf T}B_{\rm p}=2\pi I` を満たす。12個の周期像を作ると原子数が12倍になり、超胞周期境界も含めた最短原子間距離は :math:`2\sqrt2\,\mathrm{\mathring{A}}` で元のFCC最近接距離と一致する。

この例は代数恒等式を検算するものであり、特定の計算コードのファイル読込や、任意の非対角超胞での周期像列挙までは検証しない。実計算に接続するときは、原子種・占有率・単位・境界条件も含む構造全体で照合する。

.. _lt-common-mistakes:

よくある誤り
------------------

* 慣用単位胞の3辺だけを基本並進とみなし、F中心・I中心・底心の格子点を落とす。
* :math:`A'=AP` を使いながら、分率座標を :math:`P^{-1}` で変換しない。
* 方向指数 :math:`\boldsymbol u` とMiller指数 :math:`\boldsymbol h` に同じ変換則を適用する。
* 格子だけ回し、Cartesian磁化・外場・速度・応力などを対応させない。
* 原点シフトを忘れる、またはwrapだけで基本単位胞縮約・超胞化が済むと思う。
* 対称性標準化による理想化を、緩和後構造を保つ単なる基底変更とみなす。
* 行ベクトルAPIへ列行列をそのまま渡す、あるいはÅ・Bohr・``alat`` を混同する。

参考資料
------------

* IUCr, `Conventional cell <https://dictionary.iucr.org/Conventional_cell>`_.
* spglib, `Python API: standardize_cell <https://spglib.readthedocs.io/en/stable/api/autodoc/spglib.cell.html#spglib.cell.standardize_cell>`_ および `Definitions and conventions <https://spglib.readthedocs.io/en/stable/definition.html>`_.
* ASE, `Cell <https://docs.ase-lib.org/ase/cell.html>`_.
* Quantum ESPRESSO 7.5, `pw.x input description <https://www.quantum-espresso.org/Doc/INPUT_PW.html>`_.
* LAMMPS, `Triclinic simulation boxes <https://docs.lammps.org/Howto_triclinic.html>`_.
* SPR-KKR, `User Guide (19 October 2023) <https://sprkkr.org/?download_id=3257&sdm_process_download=1>`_. 入力仕様はファイル種別と版に依存する。
