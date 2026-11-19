.. _point-and-space-groups:

点群と空間群
============

:ref:`crystal-symmetry-operations` で表した操作を使い、空間群と点群が何を分類するかを
整理する。格子と原子配置の両方を考えることで、同じブラベー格子型の結晶で対称性の違いが
生じる理由も見えてくる。

空間群と並進部分群
------------------

ある結晶の原子配置を保つ操作をすべて集めたものが **空間群** :math:`\mathcal G` である。
このうち線形部分が :math:`I` の操作、つまり結晶を保つ純粋な並進の集まりを並進部分群
:math:`\mathcal T` と呼ぶ。対応する並進ベクトルの集合が、その結晶の格子である。
例えばF中心の慣用単位胞を用いる場合は、胞の辺を整数倍した並進に加え、
:ref:`lattice` で導入した中心並進も :math:`\mathcal T` に含まれる。
三次元の結晶の空間群は230種類に分類される。

空間群の操作には、回転に軸方向の並進が伴うらせん操作や、鏡映に面に沿った並進が
伴う映進操作もある。例えば :math:`z` 軸のまわりの180度回転と :math:`c/2` の軸方向
並進を一緒に行う :math:`2_1` らせん操作は、2回繰り返すと :math:`c` の純粋な並進になる。
原子の座標を展開したり回折の反射条件を調べたりするときは、この並進部分も必要になる。

点群と空間群の関係
------------------

空間群の各操作 :math:`\{Q\mid\boldsymbol t\}` から線形部分 :math:`Q` を取り出すと
**点群** :math:`\mathcal P` が得られる。式 :eq:`crystal-symmetry-composition` に
よれば、同じ :math:`Q` を持つ二つの操作の差は純粋な格子並進である。点群の一つの
操作には、格子並進の違いだけをもつ空間群の操作の組が対応する。この関係を
:math:`\mathcal G/\mathcal T\simeq\mathcal P` と書く。
三次元の結晶学的な点群は32種類である。

先の :math:`2_1` らせん操作の例では、点群に残るのは180度回転である。同じ点群の
操作でも、空間群では純粋な回転として現れる場合と、らせん操作として現れる場合がある。
:ref:`irreducible-kpoints` で波数の行き先を求める際には線形部分を使い、
:ref:`structure-factor` で原子ごとの散乱波を足す際には原子の位置に応じた位相を使う。

.. _asymmetric-unit-and-cif:

非対称単位と原子座標の展開
--------------------------

非対称単位は、空間群の操作で空間全体に展開できる領域である。
:ref:`CIF<lt-cif>` に対称操作と代表原子の分率座標がある場合、式
:eq:`crystal-symmetry-fractional` を使って単位胞内の等価な原子を求められる。
単位胞の外に出た座標は、各成分が :math:`[0,1)` に入るよう整数を足し引きして戻す。例えば反転
:math:`(x,y,z)\mapsto(-x,-y,-z)` を :math:`(1/4,1/4,0)` に施すと
:math:`(3/4,3/4,0)` と等価な位置が得られる。反転中心の
:math:`(0,0,0)` にある原子は自分自身に戻るため、1個として数える。

.. _inversion-and-polarization:

反転対称性と自発分極
--------------------

ブラベー格子型は格子点の並びを分類し、空間群はそこに置いた原子配置の対称性を表す。
例えば :ref:`ferroelectricity` で扱うチタン酸バリウムの立方晶相では、反転で
原子配置が保たれる。自発分極は極性ベクトルなので、反転で符号が変わる。
反転対称な構造が許す巨視的な自発分極は :math:`\boldsymbol P=-\boldsymbol P` を
満たし、ゼロになる。正方晶相では反転対称性が失われ、長軸方向の分極が許される。
実際に分極が生じるか、その大きさがいくらかは、原子変位と電子状態で決まる。

参考資料
--------

* IUCr, `Space group <https://dictionary.iucr.org/Space_group>`_.
* IUCr, `Point group <https://dictionary.iucr.org/Point_group>`_.
* IUCr, `The structure of space groups <https://it.iucr.org/Ac/ch1o3v0001/sec1o3o3/>`_.
* IUCr, `Asymmetric unit <https://dictionary.iucr.org/Asymmetric_unit>`_.
