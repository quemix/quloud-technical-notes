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

となる。:math:`k` は第1ブリルアンゾーン :math:`-\pi/a<k\le\pi/a` にとれば
十分である。:math:`N` 個の原子軌道から :math:`N` 個の状態ができ、そのエネルギーは
:math:`\varepsilon_0-2t` から :math:`\varepsilon_0+2t` の範囲に分布する。
この幅 :math:`W=4t` がバンド幅であり、ホッピングが大きいほどバンドは広がる。
:math:`k=0` の状態はすべての軌道が同位相で重なる結合的な組み合わせ、
:math:`k=\pi/a` の状態は隣どうしが逆位相の反結合的な組み合わせである。

1原子あたり1電子をもつ鎖では、:math:`N` 個の電子がエネルギーの低い状態から
2個ずつ入り、:math:`N/2` 個の状態が占有される。これを **半充填** という。
占有状態は :math:`\cos(ka)>0`、すなわち :math:`|k|<\pi/(2a)` であり、
フェルミ準位は :math:`E_{\mathrm F}=\varepsilon_0`、フェルミ波数は
:math:`k_{\mathrm F}=\pi/(2a)` である。占有状態と空状態の間にエネルギーの
隙間がないので、この模型の半充填状態は金属的である。

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

定在波は :math:`+k` と :math:`-k` の進行波の重ね合わせなので、擬似波数は
:math:`0` から :math:`\pi/a` の範囲だけを動く。周期鎖で縮退していた
:math:`\pm k` の組が、有限鎖では1つの定在波に対応する。

有限鎖のHOMO–LUMOギャップ
-------------------------

偶数 :math:`N` の鎖が半充填のとき、:math:`j=1,\ldots,N/2` の準位が占有される。
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

を得る。周期鎖ではギャップが0であるのに対し、有限鎖では準位が離散的なため、
HOMOとLUMOの間に :math:`1/N` に比例する隙間が残る。これは鎖が有限であることだけに
よる **有限サイズギャップ** であり、:math:`N\to\infty` で0になる。原子数を増やしても
ギャップが :math:`1/N` で閉じない場合は、この模型に含まれない機構を考える必要がある
（:ref:`tb-ssh` を参照）。

同様に、両端の準位の差は :math:`E_N-E_1=4t\cos\bigl(\pi/(N+1)\bigr)` であり、
:math:`N\to\infty` でバンド幅 :math:`4t` に近づく。:eq:`tb-finite-gap` と
準位の幅は、計算で得た有限鎖の準位から有効的なホッピング :math:`t` を
見積もる手がかりになる。

重なりと遠方ホッピングの効果
----------------------------

ここまでの模型は、直交基底で最近接ホッピングのみを考える最小限のものである。
実際の原子軌道を基底にすると、軌道の重なりや、より遠い原子とのホッピングが現れ、
分散の形が変わる。

**第2近接ホッピング**　:math:`\langle n|\hat H|n\pm2\rangle=-t_2` を加えても、
ブロッホ和 :eq:`tb-bloch-sum` は固有状態のままであり、

.. math::
   :label: tb-band-t2

   E(k)=\varepsilon_0-2t\cos(ka)-2t_2\cos(2ka)

となる。一般に :math:`m` 番目の近接ホッピングは :math:`\cos(mka)` の項を加える。
したがって、周期鎖の :math:`E(k)` を :math:`\cos(mka)` で展開した係数は、
直交基底での各距離のホッピングに対応する。

**軌道の重なり**　隣接軌道の重なりを :math:`\langle n|n\pm1\rangle=s` とすると、
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

隣接原子間のホッピングが1本おきに :math:`t_1`、:math:`t_2` と交替する鎖を考える。
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
有限鎖の準位を擬似波数に対して並べると、このギャップは半充填位置
:math:`ka=\pi/2` での段差として現れる。:eq:`tb-finite-gap` のギャップが
:math:`N` とともに0に近づくのに対し、:eq:`tb-ssh-gap` は :math:`N` によらず残る。

1次元の半充填鎖では、格子が二量化してホッピングが交替するとギャップが開き、
占有状態のエネルギーが下がる。この電子エネルギーの利得が格子の弾性エネルギーの
損失を上回るため、原子の変位を許した鎖は自発的に二量化する。これを
**Peierls不安定性** という [Heeger1988]_。一方、原子核を等間隔に固定したまま、
電子状態の側で結合の強弱が交替する状態は **結合次数波** （bond-order wave, BOW）と
呼ばれ、原子変位を伴うPeierls歪みとは区別される。Hartree–Fock法などの平均場計算で
BOWが現れる場合、隣接原子間の密度行列要素（:ref:`結合次数<bond_order>`）の交替が
交換項を通じて有効ハミルトニアンの隣接要素の交替を生み、それがまた結合次数の
交替を支えるという自己無撞着な関係になる。SSH模型はその結果を理解する最小の
模型であるが、電子間相互作用を含む平均場の有効ハミルトニアンそのものではない。

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

.. [McKinnon1995] B. A. McKinnon and T. C. Choy, “Significance of nonorthogonality in
   tight-binding models,” *Physical Review B* **52**, 14531 (1995),
   `doi:10.1103/PhysRevB.52.14531 <https://doi.org/10.1103/PhysRevB.52.14531>`_.
.. [SSH1979] W. P. Su, J. R. Schrieffer, and A. J. Heeger, “Solitons in
   Polyacetylene,” *Physical Review Letters* **42**, 1698–1701 (1979),
   `doi:10.1103/PhysRevLett.42.1698 <https://doi.org/10.1103/PhysRevLett.42.1698>`_.
.. [Heeger1988] A. J. Heeger, S. Kivelson, J. R. Schrieffer, and W.-P. Su,
   “Solitons in conducting polymers,” *Reviews of Modern Physics* **60**, 781–850 (1988),
   `doi:10.1103/RevModPhys.60.781 <https://doi.org/10.1103/RevModPhys.60.781>`_.
