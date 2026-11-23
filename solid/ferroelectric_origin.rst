.. _ferroelectric-origin:

BaTiO\ :sub:`3`\ の強誘電不安定性の起源
==========================================

立方晶のBaTiO\ :sub:`3`\ では、\ :ref:`極性ソフトモード<polar-soft-mode>`\ が0 Kの計算で\ :ref:`虚数振動数<imaginary-frequency>`\ をもち、Tiと酸素が逆向きにずれた構造のほうがエネルギーが低い。本稿では、この不安定性がどの相互作用の釣り合いから
生じるかを、長距離のクーロン相互作用、短距離の反発、Ti 3d–O 2pの混成の三つに分けて説明する。続いて、これらの相互作用を
取り込んだ有限温度の計算が、相の順序と転移の性格について示したことをまとめる。4つの相の構造と分域は「\ :ref:`ferroelectricity`\ 」、
分極の大きさの求め方は「\ :ref:`periodic-polarization`\ 」で扱う。

**前提知識**: :ref:`BaTiO₃の4つの相<batio3-four-phases>`、:ref:`秩序変数としてのモードの振幅<sm-landau>`、:ref:`立方晶BaTiO₃の不安定なΓ点モード<phonon-batio3-example>`、:ref:`Born有効電荷<fo-born-charge>`、:ref:`軌道の混成とスペクトルの重なり<orbital-hybridization>`、:ref:`Löwdin解析<lowdin>`。

**学習目標**:

* ソフトモードの復元力を、短距離の反発と長距離のクーロン相互作用の和として説明する。
* 双極子どうしの相互作用の角度依存から、Tiの変位が鎖状にそろいやすい理由を導く。
* Ti 3d–O 2pの混成が不安定性に必要であることを示した計算と、PDOSだけでは言えないことを区別する。
* 第一原理の有効ハミルトニアンによる有限温度の計算が、相の順序と、変位型・秩序–無秩序型の判定について示したことを説明する。

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

局所電場の考え方でBaTiO\ :sub:`3`\ の不安定性を説明する試みは、Slaterにさかのぼる [Slater1950]_。

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

混成は、Born有効電荷を通じてクーロン相互作用の側にも効く。Ghosezらは、Tiの大きなBorn有効電荷の主な部分がO 2pのバンドから生じ、Tiが動くとO 2pの\ :ref:`Wannier関数の中心<fo-berry-phase>`\ が逆向きに動くことを示した。Ti–Oの距離が縮むとO 2pとTi 3dの混成が変わり、電子がOからTiへ移るためである
[GhosezMichenaudGonze1998]_。有効電荷が大きくなれば、:eq:`fo-dipole` の係数も大きくなる。

同じペロブスカイト型のPbTiO\ :sub:`3`\ では、Pb–Oの混成も加わり、大きなひずみを伴って正方晶が安定になる。BaTiO\ :sub:`3`\ ではBa–Oの結合が
ほぼイオン的で、菱面体晶が最も安定になる [PdosCohen1992]_。Aサイトの原子の結合の性質が、どの相が低温で現れるかを左右する。

.. _fo-finite-temperature:

有限温度の相の順序と変位の相関
------------------------------

ZhongとVanderbilt、Rabeは、局所的なモードの自己エネルギー、:eq:`fo-dipole` の双極子の相互作用、短距離の相互作用、
ひずみとの結合を第一原理計算で決めた有効ハミルトニアンを作り、モンテカルロ法で解いた [Zhong1994]_ [Zhong1995]_。
立方晶・正方晶・直方晶・菱面体晶の順に現れる相の順序は、実験と一致した。LDAの体積の過小評価を補う負の圧力（−4.8 GPa）を
かけた計算での転移温度は、立方晶–正方晶が297 K（論文に併記された実験値403 K）、正方晶–直方晶が230 K（278 K）、
直方晶–菱面体晶が200 K（183 K）で、上の二つの転移は実験より低い（同論文の表III、:math:`14\times14\times14` 胞の値）。

立方晶相の転移温度のすぐ上で、各胞の局所的な変位の分布は弱く二つの山をもち、不安定な揺らぎは
Γ点からX点への方向にゾーン境界まで広がっていた。彼らは立方晶–正方晶転移を、\ :ref:`変位型と秩序–無秩序型<displacive-order-disorder>`\ の
中間で、やや秩序–無秩序型に近いと結論した [Zhong1995]_。揺らぎがΓ点からXの方向に広がることは、上で導いた鎖状の相関の表れで、
立方晶の\ :ref:`フォノン分散<phonon-batio3-example>`\ で不安定な分枝がXとMの方向へ平らに広がることとも整合する。
X線の散漫散乱、二体分布関数（PDF）、X線吸収微細構造（XAFS）で調べた局所的なTiの変位と平均構造の違いは、
「\ :ref:`ferroelectricity`\ 」の\ :ref:`事例<fe-local-average>`\ で扱う。

.. _fo-interpretation-limits:

解釈と限界
----------

:eq:`fo-kappa-split` の分け方は一意ではなく、:math:`\kappa_{\mathrm{SR}}` と :math:`\kappa_{\mathrm C}` の値は分け方によって変わる。
物理的に意味があるのは和の :math:`\kappa` であり、分けた値は物質の比較や傾向の説明に使う。

混成が不安定性の原因であるという結論は、混成を取り除いた計算との比較による。ある構造のPDOSに混成が見えることや、
変位とともにPDOSが変わることは、この機構と整合するが、それだけでは因果を示さない。PDOSで山が重なることは、\ :ref:`混成<orbital-hybridization>`\ の十分条件でもない。

有効ハミルトニアンの転移温度は、パラメータを決めた第一原理計算の近似（交換相関汎関数と、体積を補う圧力）に依存する。
相の順序が実験と一致しても、転移温度に十数〜約100 Kの差が残ることは、この種の計算の精度の目安になる。

.. _fo-related:

関連資料
--------

* :ref:`ferroelectricity`
* :ref:`periodic-polarization`
* :ref:`soft-mode`
* :ref:`phonon`
* :ref:`projected-dos`
* :ref:`lowdin`

.. _fo-bibliography:

参考文献
--------

.. [Slater1950] J. C. Slater, “The Lorentz correction in barium titanate,”
   *Physical Review* **78**, 748–761 (1950),
   `doi:10.1103/PhysRev.78.748 <https://doi.org/10.1103/PhysRev.78.748>`_.

.. raw:: html

   <script src="../_static/js/legacy-anchors.js" defer></script>
