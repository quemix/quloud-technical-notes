.. _ferroelectric-origin:

強誘電不安定性の起源と分極の評価
================================

立方晶のBaTiO\ :sub:`3`\ では、\ :ref:`極性ソフトモード<polar-soft-mode>`\ が0 Kの計算で\ :ref:`虚数振動数<imaginary-frequency>`\ をもち、Tiと酸素が逆向きにずれた構造のほうがエネルギーが低い。本稿では、この不安定性がどの相互作用の釣り合いから
生じるかを、長距離のクーロン相互作用、短距離の反発、Ti 3d–O 2pの混成の三つに分けて説明する。続いて、
生じた分極の大きさを計算で求める方法として、Born有効電荷による見積もりと、Berry位相による定義を扱う。4つの相の構造と分域は「\ :ref:`ferroelectricity`\ 」で扱った。

**前提知識**: :ref:`BaTiO₃の4つの相<batio3-four-phases>`、:ref:`秩序変数としてのモードの振幅<sm-landau>`、:ref:`立方晶BaTiO₃の不安定なΓ点モード<phonon-batio3-example>`、:ref:`軌道の混成とスペクトルの重なり<orbital-hybridization>`、:ref:`Löwdin解析<lowdin>`。

**学習目標**:

* ソフトモードの復元力を、短距離の反発と長距離のクーロン相互作用の和として説明する。
* 双極子どうしの相互作用の角度依存から、Tiの変位が鎖状にそろいやすい理由を導く。
* Ti 3d–O 2pの混成が不安定性に必要であることを示した計算と、PDOSだけでは言えないことを区別する。
* 周期結晶の分極が分極の量子の整数倍だけ不定であることを、1次元の鎖で導く。
* Born有効電荷を定義し、原子の変位から分極を見積もる。形式電荷との違いを数値で示す。

.. _ferroelectric-instability-origin:

長距離のクーロン相互作用と短距離の反発
--------------------------------------

極性ソフトモードの振幅を :math:`Q` とすると、高温相のまわりのエネルギーは :eq:`sm-landau` の
:math:`E(Q)=E_0+\frac12\kappa Q^2+\cdots` で表され、:math:`\kappa<0` なら立方晶は不安定である。
この曲率を、起源の異なる二つの寄与に分けて

.. math::
   :label: fo-kappa-split

   \kappa=\kappa_{\mathrm{SR}}+\kappa_{\mathrm{C}},\qquad \kappa_{\mathrm{SR}}>0,\quad \kappa_{\mathrm{C}}<0

と書く。:math:`\kappa_{\mathrm{SR}}` は、変位で近づいた原子どうしの電子雲が重なることによる短距離の反発で、立方晶を安定にする。
:math:`\kappa_{\mathrm{C}}` は、変位で生じた電気双極子どうしの長距離のクーロン相互作用で、極性の変位を促す。
強誘電性はこの二つの釣り合いで決まり、\ :math:`|\kappa_{\mathrm C}|>\kappa_{\mathrm{SR}}` のとき不安定になる [PdosCohen1992]_。
第一原理計算の力定数をこの二つに分ける方法には任意性があるが、物質ごとの傾向を理解するのに使われている [Ghosez1999]_。

クーロン相互作用の寄与の形は、双極子どうしの相互作用から分かる。単位胞 :math:`i` の局所的なモードの振幅を
:math:`\boldsymbol u_i`、モードの有効電荷（各原子の\ :ref:`Born有効電荷<fo-born-charge>`\ をモードの変位の比で重み付けて足したもの）を :math:`Z^*` とすると、胞 :math:`i` の双極子は :math:`\boldsymbol d_i=Z^*e\,\boldsymbol u_i` である。Zhongらの有効ハミルトニアンでは、双極子どうしのエネルギーを

.. math::
   :label: fo-dipole

   E_{\mathrm{dpl}}=\frac{(Z^*e)^2}{4\pi\varepsilon_0\varepsilon_\infty}\sum_{i<j}
   \frac{\boldsymbol u_i\cdot\boldsymbol u_j-3(\hat{\boldsymbol R}_{ij}\cdot\boldsymbol u_i)(\hat{\boldsymbol R}_{ij}\cdot\boldsymbol u_j)}{R_{ij}^3}

とする [Zhong1995]_。:math:`\boldsymbol R_{ij}` は胞 :math:`i` から :math:`j` へのベクトル、:math:`\varepsilon_\infty` は電子の分極による
遮蔽を表す高周波の誘電率である。同じ向きの2つの変位 :math:`\boldsymbol u_i=\boldsymbol u_j=\boldsymbol u` について、
:math:`\boldsymbol R_{ij}\parallel\boldsymbol u`\ （縦に並ぶ）なら分子は :math:`u^2-3u^2=-2u^2` でエネルギーが下がり、
:math:`\boldsymbol R_{ij}\perp\boldsymbol u`\ （横に並ぶ）なら :math:`+u^2` で上がる。双極子は変位の方向に沿って縦に並ぶとき
互いを安定にするので、Tiの変位はTi–O–Tiの鎖に沿ってそろいやすい。立方晶の\ :ref:`フォノン分散<phonon-batio3-example>`\ で、
不安定な分枝がΓ点からXとMの方向へ平らに広がるのは、この鎖状の相関の表れである。:eq:`fo-dipole` の係数は
:math:`(Z^*)^2/\varepsilon_\infty` に比例するので、有効電荷が大きいほど :math:`\kappa_{\mathrm C}` の不安定化が強くなる。

Ghosezらは、立方晶BaTiO\ :sub:`3`\ の原子間力定数をこの二つに分けて調べた [Ghosez1999]_。1つの原子だけを動かしたときに
その原子に働く復元力の係数（自己力定数）は全ての原子で正で、孤立した変位はどれも安定である。不安定性は、複数の原子が協調して動くときだけ生じる。原子間の力定数は、ある原子の変位で別の原子に働く力の係数で、負の値は相手を同じ向きへ引く結合を表す。Tiの自己力定数 :math:`+0.1522\ \mathrm{Ha/Bohr^2}` に対し、変位の方向に並ぶ隣のTiとの力定数は1本あたり
:math:`-0.0672\ \mathrm{Ha/Bohr^2}` で、鎖の両隣の2本で自己力定数の約9割を打ち消す。横に並ぶTiとの力定数は
:math:`+0.0075\ \mathrm{Ha/Bohr^2}` と小さい。Tiと鎖の上の酸素の間の力定数では、双極子の寄与 :math:`+0.2325` と短距離の寄与
:math:`-0.2231` が逆符号でほぼ打ち消し合い、和は :math:`+0.0094\ \mathrm{Ha/Bohr^2}` にすぎない。大きな二つの寄与のわずかな差で
符号が決まることが、:eq:`fo-kappa-split` の釣り合いの数値上の姿である。

ZhongとVanderbilt、Rabeは、局所的なモードの自己エネルギー、:eq:`fo-dipole` の双極子の相互作用、短距離の相互作用、
ひずみとの結合を第一原理計算で決めた有効ハミルトニアンを作り、モンテカルロ法で4つの相の順序を再現した
[Zhong1994]_ [Zhong1995]_。局所電場の考え方でBaTiO\ :sub:`3`\ の不安定性を説明する試みは、Slaterにさかのぼる [Slater1950]_。

.. _fo-hybridization:

Ti 3d–O 2pの混成の役割
----------------------

CohenとKrakauerは、立方晶BaTiO\ :sub:`3`\ のLAPW法の全エネルギー計算で、TiとOが大きく混成し、Baはほぼイオン的なBa\ :sup:`2+`\ としてふるまうことを示し、Ti–Oの混成が強誘電不安定性に欠かせないと結論した
[CohenKrakauer1990]_。Cohenはさらに、閉殻の球対称なイオンを仮定して混成を含まないイオン模型（potential-induced breathing模型）では、
長距離のクーロン相互作用が極性の変位を好んでも短距離の反発が勝ち、立方晶が安定になることを示した。LAPW計算でTi 3dの寄与を抑えると、
不安定性は消える。Ti 3d–O 2pの混成が短距離の反発を弱め、:eq:`fo-kappa-split` の :math:`\kappa_{\mathrm{SR}}` を小さくすることで、
不安定性を可能にしている [PdosCohen1992]_。

混成の存在は、\ :ref:`射影状態密度<projected-dos>`\ にも表れる。主にO 2pからなる価電子帯にTi 3dの重みが現れることは、
占有状態がO 2pとTi 3dの混じった状態であることを示す（\ :ref:`orbital-hybridization`\ の2準位模型）。ただし、PDOSの重みは
混成の行列要素そのものではなく、混成が不安定性の原因であることまでは示さない。原因であることの根拠は、上の計算のように
混成を取り除くと不安定性が消えることにある。
`計算事例「二重井戸ポテンシャル Part 2」 <https://example.quloud-platform.quemix.com/BaTiO3/total-energy.html#ti-3d>`_\ も、Ti 3dを除く試験は行っておらず、因果の根拠を文献に置いている。

混成は、Born有効電荷を通じてクーロン相互作用の側にも効く。Ghosezらは、Tiの大きなBorn有効電荷の主な部分がO 2pのバンドから生じ、Tiが動くとO 2pのWannier関数の中心が逆向きに動くことを示した。Ti–Oの距離が縮むとO 2pとTi 3dの混成が変わり、電子がOからTiへ移るためである
[GhosezMichenaudGonze1998]_。有効電荷が大きくなれば、:eq:`fo-dipole` の係数も大きくなる。

同じペロブスカイト型のPbTiO\ :sub:`3`\ では、Pb–Oの混成も加わり、大きなひずみを伴って正方晶が安定になる。BaTiO\ :sub:`3`\ ではBa–Oの結合が
ほぼイオン的で、菱面体晶が最も安定になる [PdosCohen1992]_。Aサイトの原子の結合の性質が、どの相が低温で現れるかを左右する。

.. _polarization-evaluation:

分極の評価
----------

.. _fo-polarization-quantum:

周期結晶の分極と分極の量子
^^^^^^^^^^^^^^^^^^^^^^^^^^

有限の分子なら、電気双極子モーメントは電荷と位置の積の和で一意に決まる。周期結晶で同じように
単位胞の中の電荷の双極子を体積で割ると、単位胞の取り方によって値が変わる [Spaldin2012]_。
電荷 :math:`\pm e` のイオンが間隔 :math:`a/2` で交互に並ぶ1次元の鎖（格子定数 :math:`a`）で確かめる。
胞の左端を原点にして、:math:`-e` が :math:`a/4`、:math:`+e` が :math:`3a/4` にある胞を選ぶと、長さあたりの双極子は

.. math::

   P=\frac1a\left(-e\cdot\frac a4+e\cdot\frac{3a}4\right)=\frac e2

で、:math:`+e` が :math:`a/4`、:math:`-e` が :math:`3a/4` にある胞を選ぶと :math:`P=-e/2` になる。両者の差 :math:`e` は、
電荷 :math:`e` を1格子定数だけ動かしたときの双極子の変化である。電子を隣の胞の同じ位置へ移しても結晶は変わらないので、
:math:`P` はこの整数倍だけ不定である。3次元では、格子ベクトル :math:`\boldsymbol R` と単位胞の体積 :math:`\Omega` を使って

.. math::
   :label: fo-polarization-quantum

   \boldsymbol P_{\mathrm q}=\frac{e\boldsymbol R}{\Omega}

を\ **分極の量子**\ と呼ぶ（スピンが縮退した系では2倍を単位にすることも多い）。分極の値は :math:`\boldsymbol P_{\mathrm q}` の
間隔で並ぶ集合（分極の格子）をなし、反転対称な構造ではこの集合が0について対称になる。

一方、陽イオンを陰イオンに対して :math:`d` だけずらしたときの変化は、どちらの胞を選んでも :math:`\Delta P=ed/a` で同じになる。
実験で測るのも変化である。分極を電場で :math:`+P_{\mathrm s}` から :math:`-P_{\mathrm s}` へ反転させると、
電極の単位面積あたり :math:`2P_{\mathrm s}` の電荷が外部回路を流れ、報告される自発分極はその半分である [Spaldin2012]_。
正方晶BaTiO\ :sub:`3`\ の :math:`c` 軸方向（:math:`\Omega=a^2c`）では :math:`P_{\mathrm q}=e/a^2\simeq1.0\ \mathrm{C/m^2}=100\ \mu\mathrm{C/cm^2}` で、
自発分極の実験値 :math:`26\ \mu\mathrm{C/cm^2}` [Wieder1955]_ の約4倍である。計算で分極を求めるときは、反転対称な参照構造から
原子を少しずつ動かして、同じ枝の上で変化を追う。一度に大きく動かすと、値が量子の分だけ別の枝へ跳んでも区別できないからである。
この経路の途中の構造は、どれもバンドギャップの開いた絶縁体でなければならない（\ :ref:`Berry位相による分極<fo-berry-phase>`）。

.. _fo-born-charge:

Born有効電荷による見積もり
^^^^^^^^^^^^^^^^^^^^^^^^^^

原子 :math:`\kappa` を :math:`\beta` 方向へ :math:`u_{\kappa\beta}` だけ動かしたときの分極の変化の割合を

.. math::
   :label: fo-born-charge

   Z^*_{\kappa,\alpha\beta}=\frac{\Omega}{e}\left.\frac{\partial P_\alpha}{\partial u_{\kappa\beta}}\right|_{\boldsymbol E=0}

と書き、\ **Born有効電荷**\ と呼ぶ。微分は、巨視的な電場を0に保ち、セルの形と大きさを固定して、原子 :math:`\kappa` だけを
動かしたときのものである [GhosezMichenaudGonze1998]_。動いた原子の電荷だけでなく、変位に伴って流れる電子の寄与も含む。
:math:`Z^*` が変位によらないとみなせる範囲では、反転対称な参照構造からの変位で分極は

.. math::
   :label: fo-linear-polarization

   \Delta P_\alpha\simeq\frac{e}{\Omega}\sum_\kappa\sum_\beta Z^*_{\kappa,\alpha\beta}\,u_{\kappa\beta}

と見積もれる [GhosezMichenaudGonze1998]_。全原子を同じだけ動かしても分極は変わらないので、:math:`\sum_\kappa Z^*_{\kappa,\alpha\beta}=0` が成り立つ
（電荷中性の和則）。そのため、どの原子を基準に変位を測っても :eq:`fo-linear-polarization` の値は変わらない。

立方晶BaTiO\ :sub:`3`\ では、BaとTiのサイトは立方対称なので :math:`Z^*` はスカラーになる。酸素のサイトは正方対称なので、
変位がTi–O–Tiの鎖に沿う場合（O∥）と垂直な場合（O⊥）の二つの値をもつ。:numref:`tbl-born-charges-batio3` に、
第一原理計算の値を形式電荷と並べる。

.. list-table:: 立方晶BaTiO\ :sub:`3`\ のBorn有効電荷（LDAの線形応答計算、:math:`a_0=3.94` Å [GhosezMichenaudGonze1998]_）
   :name: tbl-born-charges-batio3
   :header-rows: 1
   :widths: 28 18 18 18 18

   * -
     - Ba
     - Ti
     - O⊥
     - O∥
   * - 形式電荷
     - +2
     - +4
     - −2
     - −2
   * - Born有効電荷
     - +2.77
     - +7.25
     - −2.15
     - −5.71

Born有効電荷の値は、[GhosezMichenaudGonze1998]_ の表VIIのうち、LDAで最適化した格子定数 :math:`a_0=3.94` Å の行である
（同論文の表IIの値と同じ）。格子定数を変えると値も変わり、例えば :math:`a_0=4.00` Å ではTi :math:`+7.29`、O∥ :math:`-5.75` である。

TiとO∥のBorn有効電荷は、形式電荷のそれぞれ約1.8倍と約2.9倍である。和は :math:`2.77+7.25-2.15\times2-5.71=+0.01` で、
和則をほぼ満たす。Berry位相の方法による計算でも、Ti :math:`+7.16`、O∥ :math:`-5.69` とほぼ同じ値が得られている
[ZhongKingSmithVanderbilt1994]_。:ref:`Löwdin電子数<lowdin>`\ のような静的な電荷は、ある構造で電子を原子に割り当てた量であり、変位に対する応答であるBorn有効電荷とは別の量である [GhosezMichenaudGonze1998]_。

この表の値で、正方晶BaTiO\ :sub:`3`\ の分極を見積もる。ButtnerとMaslenの室温の単結晶X線回折の構造
（:math:`a=3.9998` Å、:math:`c=4.0180` Å）\ [ButtnerMaslen1992]_ で、Baを基準に中心対称な位置からの :math:`c` 軸方向の変位を
分極の向きを正にとって求め、:eq:`fo-linear-polarization` の各項を計算すると次のようになる。

.. list-table:: 正方晶BaTiO\ :sub:`3`\ の分極の見積もり（:math:`\mu\mathrm{C/cm^2}`）
   :name: tbl-polarization-estimate
   :header-rows: 1
   :widths: 22 22 28 28

   * - 原子（個数）
     - 変位（Å）
     - Born有効電荷による寄与
     - 形式電荷による寄与
   * - Ti（1）
     - +0.072
     - 13.1
     - 7.2
   * - O∥（1）
     - −0.064
     - 9.1
     - 3.2
   * - O⊥（2）
     - −0.060
     - 6.5
     - 6.0
   * - 合計
     -
     - 28.7
     - 16.4

Born有効電荷で求めた約 :math:`29\ \mu\mathrm{C/cm^2}` は、実験値 :math:`26.3\ \mu\mathrm{C/cm^2}` [Wieder1955]_ に近く、
形式電荷では約6割にとどまる。とくにO∥の寄与は、形式電荷では約3分の1になる。この構造のO∥の :math:`z` 座標は
分率で0.016、その標準不確かさは0.005なので、O∥の項は約3割変わりうる。Ghosezらは、Born有効電荷が変位とともに変わることを考慮し、
Hewatの実験の変位から :math:`28.6\ \mu\mathrm{C/cm^2}` を得ている [GhosezMichenaudGonze1998]_。

.. _fo-berry-phase:

Berry位相による分極（概要）
^^^^^^^^^^^^^^^^^^^^^^^^^^^

:eq:`fo-linear-polarization` は変位が小さい範囲の近似で、:math:`Z^*` 自体を求める方法も要る。King-SmithとVanderbiltは、
分極の電子の寄与を、占有されたBloch関数の周期部分 :math:`u_{n\boldsymbol k}` の\ **Berry位相**\ で表した [KingSmithVanderbilt1993]_。
同じ量は、占有バンド :math:`n` のWannier関数の中心

.. math::
   :label: fo-wannier-center

   \bar{\boldsymbol r}_n=\frac{\Omega}{(2\pi)^3}\int_{\mathrm{BZ}}\langle u_{n\boldsymbol k}|\,i\nabla_{\boldsymbol k}\,|u_{n\boldsymbol k}\rangle\,d^3k

を使って、イオンの芯（価数 :math:`Z_\kappa^{\mathrm{ion}}`、位置 :math:`\boldsymbol r_\kappa`）とWannier中心の点電荷の双極子

.. math::
   :label: fo-wannier-polarization

   \boldsymbol P=\frac{e}{\Omega}\Bigl(\sum_\kappa Z_\kappa^{\mathrm{ion}}\boldsymbol r_\kappa-2\sum_n\bar{\boldsymbol r}_n\Bigr)

と書ける（2はスピンの縮退）\ [VanderbiltKingSmith1993]_ [Resta1994]_。Wannier関数の中心は格子ベクトルの分だけ不定なので、
:eq:`fo-wannier-polarization` も :eq:`fo-polarization-quantum` の整数倍だけ不定で、1次元の鎖で見た性質と一致する。Born有効電荷は、:eq:`fo-wannier-polarization` を、巨視的な電場を0、セルを固定として原子の変位で微分したものにあたり、BaTiO\ :sub:`3`\ の大きな値は、上で述べたO 2pのWannier中心の逆向きの移動として読める。

Berry位相で分極の差を求めるときは、参照構造から目的の構造まで、途中のどの構造でもバンドギャップが開いている経路をとり、
その上で分極の枝を連続的に追う。:eq:`fo-wannier-center` は占有バンドと非占有バンドがすべての :math:`\boldsymbol k` で分かれていることを前提にしており、
途中で金属になる経路では占有状態が定まらず、Berry位相が定義できない [KingSmithVanderbilt1993]_ [Spaldin2012]_。

Born有効電荷は、イオン結晶のΓ点で縦波と横波の光学モードの振動数が分かれる\ :ref:`LO–TO分裂<phonon>`\ の大きさも決める。ZhongとKing-Smith、Vanderbiltは、ペロブスカイト型の強誘電体で大きなBorn有効電荷のためにLO–TO分裂が巨大になることを示した
[ZhongKingSmithVanderbilt1994]_。

解釈と限界
----------

:eq:`fo-kappa-split` の分け方は一意ではなく、:math:`\kappa_{\mathrm{SR}}` と :math:`\kappa_{\mathrm C}` の値は分け方によって変わる。
物理的に意味があるのは和の :math:`\kappa` であり、分けた値は物質の比較や傾向の説明に使う。

混成が不安定性の原因であるという結論は、混成を取り除いた計算との比較による。ある構造のPDOSに混成が見えることや、
変位とともにPDOSが変わることは、この機構と整合するが、それだけでは因果を示さない。PDOSで山が重なることは、\ :ref:`混成<orbital-hybridization>`\ の十分条件でもない。

:eq:`fo-linear-polarization` は、:math:`Z^*` が一定とみなせる変位の範囲で使える。BaTiO\ :sub:`3`\ ではTiのBorn有効電荷が
変位とともに変わるので [GhosezMichenaudGonze1998]_、精度が要る場合は、参照構造から同じ枝の上でBerry位相の差を求める。
原子の部分電荷（Löwdin電子数など）と変位の積を足しても、Born有効電荷を使った値にはならない。計算した分極は、計算で得た
変位の大きさを通じて、交換相関汎関数や格子定数の選び方にも依存する。

関連項目
--------

* :ref:`ferroelectricity`
* :ref:`soft-mode`
* :ref:`phonon`
* :ref:`projected-dos`
* :ref:`lowdin`

参考資料
--------

* R. Resta and D. Vanderbilt, “Theory of polarization: A modern approach,” in *Physics of Ferroelectrics:
  A Modern Perspective*, Topics in Applied Physics **105** (Springer, 2007), pp. 31–68,
  `doi:10.1007/978-3-540-34591-6_2 <https://doi.org/10.1007/978-3-540-34591-6_2>`_.

参考文献
--------

.. [GhosezMichenaudGonze1998] Ph. Ghosez, J.-P. Michenaud, and X. Gonze, “Dynamical atomic charges:
   The case of ABO\ :sub:`3` compounds,” *Physical Review B* **58**, 6224–6240 (1998),
   `doi:10.1103/PhysRevB.58.6224 <https://doi.org/10.1103/PhysRevB.58.6224>`_.
.. [Slater1950] J. C. Slater, “The Lorentz correction in barium titanate,”
   *Physical Review* **78**, 748–761 (1950),
   `doi:10.1103/PhysRev.78.748 <https://doi.org/10.1103/PhysRev.78.748>`_.
.. [Spaldin2012] N. A. Spaldin, “A beginner's guide to the modern theory of polarization,”
   *Journal of Solid State Chemistry* **195**, 2–10 (2012),
   `doi:10.1016/j.jssc.2012.05.010 <https://doi.org/10.1016/j.jssc.2012.05.010>`_.
.. [ZhongKingSmithVanderbilt1994] W. Zhong, R. D. King-Smith, and D. Vanderbilt, “Giant LO-TO splittings
   in perovskite ferroelectrics,” *Physical Review Letters* **72**, 3618–3621 (1994),
   `doi:10.1103/PhysRevLett.72.3618 <https://doi.org/10.1103/PhysRevLett.72.3618>`_.
.. [ButtnerMaslen1992] R. H. Buttner and E. N. Maslen, “Structural parameters and electron difference
   density in BaTiO\ :sub:`3`,” *Acta Crystallographica Section B* **48**, 764–769 (1992),
   `doi:10.1107/S010876819200510X <https://doi.org/10.1107/S010876819200510X>`_.
   座標はCrystallography Open Database（COD 2100858）の記録による。
.. [Wieder1955] H. H. Wieder, “Electrical behavior of barium titanate single crystals at low temperatures,”
   *Physical Review* **99**, 1161–1165 (1955),
   `doi:10.1103/PhysRev.99.1161 <https://doi.org/10.1103/PhysRev.99.1161>`_.
   値は [GhosezMichenaudGonze1998]_ のTable Xによる。
.. [KingSmithVanderbilt1993] R. D. King-Smith and D. Vanderbilt, “Theory of polarization of crystalline
   solids,” *Physical Review B* **47**, 1651–1654 (1993),
   `doi:10.1103/PhysRevB.47.1651 <https://doi.org/10.1103/PhysRevB.47.1651>`_.
.. [VanderbiltKingSmith1993] D. Vanderbilt and R. D. King-Smith, “Electric polarization as a bulk quantity
   and its relation to surface charge,” *Physical Review B* **48**, 4442–4455 (1993),
   `doi:10.1103/PhysRevB.48.4442 <https://doi.org/10.1103/PhysRevB.48.4442>`_.
.. [Resta1994] R. Resta, “Macroscopic polarization in crystalline dielectrics: the geometric phase
   approach,” *Reviews of Modern Physics* **66**, 899–915 (1994),
   `doi:10.1103/RevModPhys.66.899 <https://doi.org/10.1103/RevModPhys.66.899>`_.
