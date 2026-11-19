.. _tightbinding:

タイト・バインディング近似
==========================

**タイト・バインディング近似** （強束縛近似）は、原子の周囲などに局在した
軌道を基底として電子状態を記述する方法である。軌道間の電子の移動を表す
ハミルトニアンの行列要素を **ホッピング積分** と呼ぶ。本稿では最も簡単な
1次元原子鎖の模型を、周期鎖、有限鎖、ホッピングが交替する鎖の順に解き、
バンドの形、有限サイズのギャップ、結合交替によるギャップがどの式から
現れるかを確かめる。

**前提知識**: 量子力学の固有値問題、行列の対角化、:ref:`ブロッホの定理<blochstheorem>`。

**学習目標**:

* 局在軌道の基底でハミルトニアンを行列として書き、1次元鎖のバンド分散を導く。
* 開放端の有限鎖の固有状態を求め、擬似波数の意味を説明する。
* 半充填の有限鎖のHOMO–LUMOギャップが原子数に反比例して閉じることを示す。
* 軌道の重なりや第2近接ホッピングが分散の形をどう変えるかを説明する。
* ホッピングが交替する鎖（SSH模型）でギャップ :math:`2|t_1-t_2|` が開くことを導く。

模型の設定
----------

原子 :math:`n` に置いた軌道を :math:`|n\rangle` と書き、軌道は互いに直交する
（:math:`\langle m|n\rangle=\delta_{mn}`）とする。ハミルトニアンの行列要素を

.. math::
   :label: tb-elements

   \langle n|\hat H|n\rangle=\varepsilon_0,\qquad
   \langle n|\hat H|n\pm1\rangle=-t\quad(t>0)

とし、それ以外の要素は0とする。:math:`\varepsilon_0` を軌道エネルギー
（オンサイトエネルギー）、:math:`t` をホッピング積分と呼ぶ。s軌道どうしの
隣接間の行列要素は通常負になるので、:math:`-t` と書いて :math:`t` を正に
とることが多い。文献によって符号の付け方が異なるので、式を比較するときは注意する。

波動関数を :math:`|\psi\rangle=\sum_n c_n|n\rangle` と展開すると、
Schrödinger方程式 :math:`\hat H|\psi\rangle=E|\psi\rangle` は係数に対する
連立方程式

.. math::
   :label: tb-recursion

   \varepsilon_0 c_n-t\,(c_{n+1}+c_{n-1})=E\,c_n

になる。以下では、この式を境界条件を変えて解く。

周期鎖のバンド分散
------------------

:math:`N` 個の原子を間隔 :math:`a` で並べ、周期境界条件 :math:`c_{n+N}=c_n`
を課す。:ref:`ブロッホの定理<blochstheorem>` より、並進 :math:`n\to n+1` に
対して位相 :math:`e^{ika}` だけ変わる解を探せばよい。そこで **ブロッホ和**

.. math::
   :label: tb-bloch-sum

   |k\rangle=\frac{1}{\sqrt N}\sum_{n=1}^{N}e^{ikna}|n\rangle,\qquad
   k=\frac{2\pi m}{Na}\quad(m=0,1,\ldots,N-1)

を考える。:math:`c_n=e^{ikna}/\sqrt N` を :eq:`tb-recursion` に代入すると

.. math::

   c_{n+1}+c_{n-1}=\left(e^{ika}+e^{-ika}\right)c_n=2\cos(ka)\,c_n

なので、:math:`|k\rangle` は固有状態であり、固有値は

.. math::
   :label: tb-band

   E(k)=\varepsilon_0-2t\cos(ka)

となる。有限の周期鎖では、:math:`N` 個の原子軌道から :math:`N` 個の状態ができる。
各状態の波数は :eq:`tb-bloch-sum` の離散値をとり、代表点を第1ブリルアンゾーン
:math:`-\pi/a<k\le\pi/a` から選べる。

:math:`N\to\infty` の極限では、離散的な準位がバンドを連続的に埋める。
:math:`k=0` ではすべての軌道が同位相で重なり、エネルギーは下端
:math:`\varepsilon_0-2t` になる。:math:`k=\pi/a` では隣どうしが逆位相になり、
エネルギーは上端 :math:`\varepsilon_0+2t` になる。この差 :math:`W=4t` がバンド幅である。

:math:`N` 個の波数それぞれに、スピンを含めて電子が2個まで入るので、バンドの定員は
:math:`2N` 個である。1原子あたり1電子の鎖では :math:`N` 個の電子が入り、定員の半分を占める。
これを :ref:`半充填<fermi-level-and-occupation>` と呼ぶ。
無限鎖の半充填では、絶対零度で :math:`|k|<\pi/(2a)` の状態が占有され、
フェルミ準位は :math:`E_{\mathrm F}=\varepsilon_0`、フェルミ波数は :math:`k_{\mathrm F}=\pi/(2a)` になる。
バンドがこの準位を横切るので、この模型の無限鎖は金属的である。

有限鎖の固有状態と擬似波数
--------------------------

両端が開いた :math:`N` 原子の鎖では、:math:`n=1` と :math:`n=N` の原子は片側に
しか隣接原子をもたない。これは、仮想的な :math:`n=0` と :math:`n=N+1` の位置に
係数0の軌道を置き、

.. math::

   c_0=c_{N+1}=0

という境界条件で :eq:`tb-recursion` を解くことと同じである。周期鎖の
進行波 :math:`e^{\pm ikna}` を重ね合わせた定在波 :math:`c_n=\sin(n\theta)` を
試すと、

.. math::

   c_{n+1}+c_{n-1}=\sin\bigl((n+1)\theta\bigr)+\sin\bigl((n-1)\theta\bigr)
   =2\cos\theta\,\sin(n\theta)

より :math:`E=\varepsilon_0-2t\cos\theta` を得る。:math:`c_0=0` は自動的に
満たされ、:math:`c_{N+1}=\sin\bigl((N+1)\theta\bigr)=0` から :math:`\theta` は

.. math::

   \theta_j=\frac{j\pi}{N+1},\qquad j=1,\ldots,N

に量子化される。:math:`\sum_{n=1}^{N}\sin^2(n\theta_j)=(N+1)/2` を使って
規格化すると、固有ベクトルと固有値は

.. math::
   :label: tb-open-vec

   \phi_j(n)=\sqrt{\frac{2}{N+1}}\sin\left(\frac{nj\pi}{N+1}\right),

.. math::
   :label: tb-open-levels

   E_j=\varepsilon_0-2t\cos\left(\frac{j\pi}{N+1}\right),\qquad j=1,\ldots,N

となる。:eq:`tb-open-levels` は、周期鎖の分散 :eq:`tb-band` に
:math:`k_ja=j\pi/(N+1)` を代入した形をしている。この :math:`k_j` を有限鎖の
**擬似波数** と呼ぶ。有限鎖は並進対称性をもたないので :math:`k_j` は厳密な
量子数ではないが、:eq:`tb-open-vec` が示すように、:math:`j` 番目の固有状態は
波数 :math:`k_j` で空間的に振動する定在波である。:math:`N` を増やすと
:math:`k_j` は :math:`0<ka<\pi` を細かく埋め、準位の集合は周期鎖のバンドに
近づく。

定在波は :math:`+k` と :math:`-k` の進行波を重ねた形をしている。
:math:`k_j` の符号を反転すると定在波全体の符号が変わるので、独立な状態には
正の擬似波数だけを割り当てればよい。開放端で許される擬似波数は
:math:`j=1,\ldots,N` に対応するため、固有状態の数は周期鎖と同じ :math:`N` 個である。

有限鎖のHOMO–LUMOギャップ
-------------------------

開放端の鎖で :math:`N` が偶数、半充填のとき、:math:`j=1,\ldots,N/2` の準位が占有される。
最高被占有軌道（HOMO）は :math:`j=N/2`、最低空軌道（LUMO）は :math:`j=N/2+1`
なので、その差は

.. math::

   \Delta_N=E_{N/2+1}-E_{N/2}
   =2t\left[\cos\frac{N\pi}{2(N+1)}-\cos\frac{(N+2)\pi}{2(N+1)}\right]

である。和積公式 :math:`\cos A-\cos B=2\sin\frac{A+B}{2}\sin\frac{B-A}{2}` に
:math:`A+B=\pi`、:math:`B-A=\pi/(N+1)` を使うと

.. math::
   :label: tb-finite-gap

   \Delta_N=4t\sin\left(\frac{\pi}{2(N+1)}\right)
   \simeq\frac{2\pi t}{N+1}\qquad(N\gg1)

を得る。開放端の等間隔鎖では、有限の長さで準位が離散的になるため、HOMOとLUMOの間に
隙間が生じる。この **有限サイズギャップ** は大きな :math:`N` でおよそ :math:`1/N` に比例し、
無限鎖の極限でゼロになる。

開放端の鎖の準位全体の幅は :math:`E_N-E_1=4t\cos\bigl(\pi/(N+1)\bigr)` であり、
:math:`N\to\infty` でバンド幅 :math:`4t` に近づく。:eq:`tb-finite-gap` と
準位の幅は、計算で得た有限鎖の準位から有効的なホッピング :math:`t` を
見積もる手がかりになる。

半充填の有限周期鎖では、:math:`N` を4で割った余りによってギャップが変わる。
:math:`N=4n+2` の場合、無限鎖の正のフェルミ波数 :math:`\pi/(2a)` の両隣の波数は
:math:`\pi/(2a)\pm\pi/(Na)` である。式 :eq:`tb-band` に代入すると、
最高被占有準位と最低空準位の差は :math:`\Delta_N=4t\sin(\pi/N)` となる。
例えば :math:`N=6` で :math:`2t` になる。大きな :math:`N` では
:math:`\Delta_N\simeq4\pi t/N` で、同じ原子数の開放端のギャップの約2倍である。

:math:`N=4n` の場合は :math:`k=\pm\pi/(2a)` が許される。この二つの縮退した準位には、
スピンを含む4状態のうち2個分だけ電子が入るため、同じエネルギーに空状態が残り、
ギャップはゼロである。このように、ギャップの大きさから :math:`t` を見積もる式は
境界条件と原子数によって変わる。無限鎖でもギャップが残る仕組みの一例は :ref:`tb-ssh` で扱う。

第2近接ホッピング
-----------------

ここまでの模型は、直交基底で最近接ホッピングのみを考える最小限のものである。
実際の原子軌道を基底にすると、軌道の重なりや、より遠い原子とのホッピングが現れ、
分散の形が変わる。

第2近接の行列要素 :math:`\langle n|\hat H|n\pm2\rangle=-t_2` を加えても、
ブロッホ和 :eq:`tb-bloch-sum` は固有状態のままであり、

.. math::
   :label: tb-band-t2

   E(k)=\varepsilon_0-2t\cos(ka)-2t_2\cos(2ka)

となる。一般に :math:`m` 番目の近接ホッピングは :math:`\cos(mka)` の項を加える。
したがって、周期鎖の :math:`E(k)` を :math:`\cos(mka)` で展開した係数は、
直交基底での各距離のホッピングに対応する。

.. |nonorthogonal-basis| replace:: 軌道の重なりと一般化固有値問題

|nonorthogonal-basis|
---------------------

隣接軌道の重なりを :math:`\langle n|n\pm1\rangle=s` とすると、
固有値問題は一般化固有値問題 :math:`Hc=ESc` になる。ブロッホ和を使うと
:math:`H` と :math:`S` はともに対角化され、

.. math::
   :label: tb-band-overlap

   E(k)=\frac{\varepsilon_0-2t\cos(ka)}{1+2s\cos(ka)}

となる。:math:`s` について1次まで展開すると

.. math::

   E(k)\simeq\varepsilon_0+2ts-2(t+\varepsilon_0 s)\cos(ka)+2ts\cos(2ka)

となり、重なりは実効的な最近接ホッピングを変えるだけでなく、:math:`\cos(2ka)` の
項も生む。:math:`\cos(2ka)` の項が必要だからといって、それだけで第2近接ホッピングが
あるとは結論できない。重なりがあると、結合的な状態と反結合的な状態で準位の
広がり方が非対称になる [McKinnon1995]_。

.. _tb-ssh:

ホッピングが交替する鎖（SSH模型）
----------------------------------

隣接原子間のホッピングの大きさが1本おきに :math:`t_1>0`、:math:`t_2>0` と交替する鎖を考える。
Su、Schrieffer、Heegerがポリアセチレンの結合交替を記述するために用いた模型で、
SSH模型と呼ばれる [SSH1979]_。元の模型ではホッピングの交替は原子の変位から
生じるが、ここではホッピングが交替するという結果だけを扱う。

周期は :math:`2a` に倍化するので、隣接する2原子を単位胞にとり、単位胞 :math:`m`
の2つの原子をA、Bと呼ぶ。胞内のAとBの間のホッピングを :math:`-t_1`、Bと次の胞の
Aの間のホッピングを :math:`-t_2` とする。単位胞の数を :math:`M=N/2` として、
副格子ごとのブロッホ和

.. math::

   |k,\mathrm A\rangle=\frac{1}{\sqrt M}\sum_{m}e^{ik\,2ma}|m,\mathrm A\rangle,\qquad
   |k,\mathrm B\rangle=\frac{1}{\sqrt M}\sum_{m}e^{ik\,2ma}|m,\mathrm B\rangle

を作る。胞 :math:`m` のAは、同じ胞のBと :math:`-t_1`、1つ前の胞 :math:`m-1` の
Bと :math:`-t_2` で結ばれているので、

.. math::

   \langle k,\mathrm A|\hat H|k,\mathrm B\rangle=-\left(t_1+t_2e^{-2ika}\right)

となる。ハミルトニアンは :math:`k` ごとの :math:`2\times2` 行列

.. math::
   :label: tb-ssh-hk

   H(k)=
   \begin{pmatrix}
   \varepsilon_0 & -h(k)\\
   -h(k)^* & \varepsilon_0
   \end{pmatrix},\qquad
   h(k)=t_1+t_2e^{-2ika}

に分かれる。ここで :math:`k` は縮小されたブリルアンゾーン
:math:`-\pi/(2a)<k\le\pi/(2a)` を動く。固有値は

.. math::
   :label: tb-ssh-band

   E_\pm(k)=\varepsilon_0\pm|h(k)|
   =\varepsilon_0\pm\sqrt{t_1^2+t_2^2+2t_1t_2\cos(2ka)}

である。

.. |ssh-band-gap| replace:: 周期の倍化とバンドギャップ

|ssh-band-gap|
--------------

:math:`t_1=t_2=t` のときは :math:`|h(k)|=2t|\cos(ka)|` となり、:eq:`tb-band` の
バンドを縮小ゾーンに折り返したものに戻る。2本のバンドは :math:`k=\pm\pi/(2a)` で
接している。:math:`t_1\neq t_2` になると、:math:`\cos(2ka)=-1` となるこの点で
:math:`|h(k)|` は最小値 :math:`|t_1-t_2|` をとり、2本のバンドの間に

.. math::
   :label: tb-ssh-gap

   \Delta_{\mathrm{SSH}}=2|t_1-t_2|

のギャップが開く。半充填では下のバンドがちょうど満たされるので、ホッピングの
交替は金属的だった鎖を絶縁体的にする。ギャップが開く :math:`k=\pm\pi/(2a)` は
元の鎖のフェルミ波数 :math:`k_{\mathrm F}` であり、周期の倍化によって
:math:`k_{\mathrm F}` がちょうど新しいゾーン境界になったことに対応する。

開放端の等間隔鎖の有限サイズギャップ（式 :eq:`tb-finite-gap`）は鎖を長くするとゼロに
近づくが、結合が交替する鎖のバルクのギャップ（式 :eq:`tb-ssh-gap`）は無限鎖でも残る。
一方、開放端で両端の結合が弱いほうのホッピングで終わる場合、十分に長い鎖では
バルクギャップの中央 :math:`\varepsilon_0` 付近に、両端に局在する二つの準位が現れる。
半充填でのHOMO–LUMOギャップはこの二準位の間隔であり、鎖を長くするとゼロに近づく。

.. 旧版の節と文献へのリンクを、移転先の案内に残す。

.. _peierls-and-bond-order-wave:
.. _heeger1988:
.. _id8:

格子が自発的に二量化する仕組みは :ref:`peierls-instability` を参照。

説明用の事例：水素原子鎖
------------------------

`水素原子を並べると電子バンドは生まれるのか <https://example.quloud-platform.quemix.com/hydrogen_chain/band_formation.html>`_
では、原子間隔1.8 Åで等間隔に並べた中性の水素原子鎖 :math:`\mathrm H_N` を、
STO-3G基底（水素1原子あたり1個の1s型基底関数）で計算している（Psi4 1.10、
原子核位置固定、開放端）。1原子1軌道・半充填という点で、本稿の模型と同じ構成である。

スピン制限のKohn–Sham計算（RKS-PBE）では、HOMO–LUMOギャップが
:math:`11.75\ \mathrm{eV}/(N+1)` によく従う。これを :eq:`tb-finite-gap` の
大きな :math:`N` での形 :math:`2\pi t/(N+1)` と比べると、有効ホッピング
:math:`t\approx11.75/(2\pi)\approx1.87` eVが得られ、バンド幅は
:math:`4t\approx7.5` eVと見積もられる。:math:`N=64` の軌道エネルギーの幅
（約8.0 eV）はこれに近いが、:eq:`tb-band` の形だけでは準位の並びを再現しきれず、
:math:`\cos(2ka)` の項を加えると当てはまりが大きく改善する。:eq:`tb-band-t2` と
:eq:`tb-band-overlap` は、その理由の候補を示している。

一方、スピン制限のHartree–Fock計算（RHF）では、:math:`N=64` でも約4.8 eVの
ギャップが残り、:eq:`tb-finite-gap` に従わない。このときRHFの電子状態では、
隣接原子間の結合次数が鎖に沿って強・弱と交替しており、SSH模型の描像と整合する。
これらの数値は上記の計算条件（STO-3G、原子間隔1.8 Å、有限鎖）に対するものであり、
水素鎖の真の基底状態の性質を決めるものではない。

解釈と限界
----------

本稿の模型は、直交基底、1原子1軌道、最近接ホッピングのみ、電子間相互作用なし
という強い単純化の上に成り立っている。目的に応じて、複数の軌道、遠くの原子との
ホッピング、軌道の重なり、電子間相互作用などを考慮する。

第一原理計算の軌道エネルギーに :eq:`tb-band` や :eq:`tb-finite-gap` を当てはめて
得た :math:`t` は、その計算の準位の並びを再現する有効パラメータである。異なる手法
（例えばHartree–Fock法とKohn–Sham法）の軌道エネルギーは同じ物理量ではないため、
フィットした :math:`t` の大小をそのまま比較することはできない。

関連項目
--------

* :ref:`bandstructure`
* :ref:`blochstheorem`
* :ref:`bond_order`
* `水素原子を並べると電子バンドは生まれるのか <https://example.quloud-platform.quemix.com/hydrogen_chain/band_formation.html>`_

参考資料
--------

* `N. Manini: The tight-binding model for electronic band structure <https://materia.fisica.unimi.it/manini/dida/tight.binding.notes.html>`_
* N. W. Ashcroft and N. D. Mermin, *Solid State Physics* (Holt, Rinehart and
  Winston, 1976), Chap. 10.
* J. K. Asbóth, L. Oroszlány, and A. Pályi, `A Short Course on Topological Insulators <https://arxiv.org/abs/1509.02295>`_, Section 1.3.

.. [McKinnon1995] B. A. McKinnon and T. C. Choy, “Significance of nonorthogonality in
   tight-binding models,” *Physical Review B* **52**, 14531 (1995),
   `doi:10.1103/PhysRevB.52.14531 <https://doi.org/10.1103/PhysRevB.52.14531>`_.
.. [SSH1979] W. P. Su, J. R. Schrieffer, and A. J. Heeger, “Solitons in
   Polyacetylene,” *Physical Review Letters* **42**, 1698–1701 (1979),
   `doi:10.1103/PhysRevLett.42.1698 <https://doi.org/10.1103/PhysRevLett.42.1698>`_.
