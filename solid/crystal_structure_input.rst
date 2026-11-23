.. _lt-structure-input:

構造の標準化と計算入力
======================

格子還元・結晶学的標準化で何が変わるかを整理し、構造ファイルや計算ソフトで
格子ベクトルと原子座標をどう指定するかを確認する。

**前提知識**: :ref:`格子の基底変換<lt-primitive-basis>`、:ref:`Cartesian座標の回転<lt-cartesian-rotation>`、
:ref:`基本単位胞<lattice-unit-cells>`、:ref:`超胞<lt-supercell>`。

**学習目標**:

* 格子還元と結晶学的標準化で、何が変わり何が保たれるかを区別する。
* CIF、Quantum ESPRESSO、SPR-KKR、LAMMPSで、格子ベクトルと原子座標の指定がどう違うかを確かめる。
* 格子ベクトルを列と行のどちらに並べるかの違いによる入力の誤りを避ける。

.. _lt-standardize-cell:

格子還元と結晶学的標準化
------------------------------------

Niggli還元は格子の計量に基づき、同じ格子を簡潔な基底で表す手続きである。原子配置を含む結晶学的標準化は対称性を探索し、選んだ空間群設定に基づく標準慣用単位胞または基本単位胞を構成する。目的と入力情報が異なる。

spglibの `standardize_cell <https://spglib.readthedocs.io/en/stable/api/autodoc/spglib.cell.html#spglib.cell.standardize_cell>`_ は ``to_primitive=True`` で基本単位胞、``to_primitive=False``\ （既定値）で標準慣用単位胞を返す。``no_idealize=False``\ （既定値）では、対称性に合わせて格子定数や原子位置が調整されることがある。歪みや緩和後の数値を保持したい場合は ``no_idealize=True`` を検討する。ただしこの指定は理想化を止めるもので、対称性探索を止めるものではない。入力構造に対して ``symprec`` と ``angle_tolerance`` が適切か、許容差を変えたときに検出対称性が安定するかも確認する。

spglibは対称性判定結果に基づいて原子順序やCartesianの向きを変える場合があり、標準化結果だけで物理的同一性を完全に判定できるわけではない。spglibのPython APIは格子ベクトルを\ **行**\ として受け取る（\ :ref:`配列規約<lt-array-conventions>`）。

.. _lt-input-formats:

計算ソフトと構造ファイル
------------------------------------

.. _lt-cif:

CIF
^^^

CIFは通常、単位胞の辺の長さ・角度と原子の\ :ref:`分率座標<coordinates>`\ を記録する。まず、座標が単位胞内の
全原子を含むか、非対称単位の代表原子だけを記録しているかを確認する。
代表原子だけのときは、空間群情報や対称操作を使って\ :ref:`非対称単位から原子座標を展開する<asymmetric-unit-and-cif>`。

部分占有があれば、組成や無秩序をどうモデル化するかを決める。セル定数から分かるのは
単位胞の形と大きさで、\ :ref:`Cartesian座標系での置き方<cell-parameters-cartesian>`\ は別に選ぶ。

.. _lt-quantum-espresso:

Quantum ESPRESSO
^^^^^^^^^^^^^^^^^

Quantum ESPRESSO 7.5の公式 `INPUT_PW <https://www.quantum-espresso.org/Doc/INPUT_PW.html>`_ によると、``ibrav=0`` は ``CELL_PARAMETERS`` でセルを与え、``ibrav>0`` はQEが定義するBravais格子のベクトルを使う。``ATOMIC_POSITIONS crystal`` は、``ibrav`` または ``CELL_PARAMETERS`` によって指定された計算セルの3本の格子ベクトルに対する分率座標である。``ibrav=0`` では超胞を直接指定することもできる。例えば ``ibrav=2`` のベクトルは :math:`\frac a2(-1,0,1)`、:math:`\frac a2(0,1,1)`、:math:`\frac a2(-1,1,0)` であり、FCC基本単位胞を使うが、\ :ref:`FCCの基底変換<lt-fcc-cell>`\ に用いる :math:`P_{\rm F}` の取り方とは軸向きが異なる。引数が負の設定もあり、例えば ``ibrav=-3`` は体心立方格子の別の対称的な軸設定を表す。符号だけからベクトルの向きや原点を推測せず、公式表の定義を使う。計算セルを変更したときは、分率座標や方向指数をそのまま引き継がず、対応する基底変換を行う。格子成分、原子位置の単位、格子定数の単位を明示し、Bohr、Å、``alat`` を混ぜない。

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

.. _lt-input-references:

参考文献
------------

* IUCr, `Conventional cell <https://dictionary.iucr.org/Conventional_cell>`_.
* spglib, `Python API: standardize_cell <https://spglib.readthedocs.io/en/stable/api/autodoc/spglib.cell.html#spglib.cell.standardize_cell>`_ および `Definitions and conventions <https://spglib.readthedocs.io/en/stable/definition.html>`_.
* ASE, `Cell <https://docs.ase-lib.org/ase/cell.html>`_.
* Quantum ESPRESSO 7.5, `pw.x input description <https://www.quantum-espresso.org/Doc/INPUT_PW.html>`_.
* LAMMPS, `Triclinic simulation boxes <https://docs.lammps.org/Howto_triclinic.html>`_.
* SPR-KKR, `User Guide (19 October 2023) <https://sprkkr.org/?download_id=3257&sdm_process_download=1>`_. 入力仕様はファイル種別と版に依存する。

.. raw:: html

   <script src="../_static/js/legacy-anchors.js" defer></script>
