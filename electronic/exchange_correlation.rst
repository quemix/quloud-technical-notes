.. _kohn-sham-dft:

Kohn–Sham法と交換相関汎関数
===========================

密度汎関数理論（density functional theory, DFT）は、電子密度から
電子系の基底状態を求める理論である。Kohn–Sham法は、同じ密度を与える
補助的な一電子軌道を用いてこの問題を解く。計算で選ぶLDAやPBEは、
電子の交換・相関の効果をエネルギーに取り入れる近似である。

前提は一電子のSchrödinger方程式である。電子密度を決める仕組みと、
交換相関汎関数の選択が格子定数や相の安定性にどう影響するかを学ぶ。
以下では原子核を固定し、磁性を扱わない場合を考える。

電子密度を変数にした基底状態の計算
----------------------------------

電子密度 :math:`n(\boldsymbol r)` は、位置 :math:`\boldsymbol r` の
周りに電子がどれだけ存在するかを表す数密度である。空間で積分すると
電子数 :math:`N_{\mathrm e}` になる。Hohenberg–Kohnの変分原理によれば、
与えた外部ポテンシャルのもとで、電子数を保ってエネルギーを最小にする
密度が基底状態の密度になる [DftHohenberg1964]_。

Kohn–Sham法では、互いに相互作用しない補助系の軌道 :math:`\psi_i` と
その占有数 :math:`f_i` から実際の電子系の密度を作る。占有数にはスピンの
寄与を含め、結晶の場合はバンドと :ref:`k点<kpoint_sampling>` にわたって和を取り、
各k点の重み :math:`w_i` を掛ける。分子では :math:`w_i=1` とする。

.. math::
   :label: dft-ks-density

   n(\boldsymbol r)=\sum_i w_i f_i|\psi_i(\boldsymbol r)|^2,\qquad
   \int n(\boldsymbol r)\,d\boldsymbol r=N_{\mathrm e}.

局所的な外部ポテンシャル :math:`v_{\rm ext}(\boldsymbol r)` をもつ
全電子系を、以下では原子単位で表す。電子系のエネルギーは、補助系の
運動エネルギー :math:`T_{\rm s}[n]`、外部ポテンシャルの寄与、
電子密度どうしの静電反発 :math:`E_{\rm H}[n]`、残りをまとめた
交換相関エネルギー :math:`E_{\rm xc}[n]` に分けられる [DftKohnSham1965]_。

.. math::
   :label: dft-ks-energy

   \begin{aligned}
   E[n]&=T_{\rm s}[n]+\int v_{\rm ext}(\boldsymbol r)n(\boldsymbol r)\,d\boldsymbol r
           +E_{\rm H}[n]+E_{\rm xc}[n],\\
   E_{\rm H}[n]&=\frac12\iint
     \frac{n(\boldsymbol r)n(\boldsymbol r')}{|\boldsymbol r-\boldsymbol r'|}
         \,d\boldsymbol r\,d\boldsymbol r'.
   \end{aligned}

:math:`T_{\rm s}` は各軌道の運動エネルギーを占有数で重み付けした和である。
:math:`E_{\rm xc}` には、電子の反対称性に伴う交換、電子同士の運動が
避け合う相関、補助系と実系の運動エネルギーの差が含まれる。
構造間で全エネルギーを比べるときは、電子系のエネルギーに
核どうしの反発も加える。

Kohn–Sham方程式と自己無撞着計算
-------------------------------

軌道の直交規格化を保って :eq:`dft-ks-energy` を変分する。
:eq:`dft-ks-density` により、密度を通じて変わる項から、
それぞれの密度に関する微分が一電子ポテンシャルとして現れる。
たとえば :math:`E_{\rm H}` の二つの密度を順に変分すると、
対称な二項が出るので係数の :math:`1/2` が消える。得られる方程式は

.. math::
   :label: dft-ks-equation

   \begin{gathered}
   \left[-\frac12\nabla^2+v_{\rm ext}+v_{\rm H}+v_{\rm xc}\right]
      \psi_i=\epsilon_i\psi_i,\\
   v_{\rm H}(\boldsymbol r)=\int
      \frac{n(\boldsymbol r')}{|\boldsymbol r-\boldsymbol r'|}\,d\boldsymbol r',
   \qquad
   v_{\rm xc}(\boldsymbol r)=\frac{\delta E_{\rm xc}[n]}{\delta n(\boldsymbol r)}.
   \end{gathered}

:math:`\epsilon_i` は補助系の一電子固有値である。右辺の軌道から密度が
決まり、その密度が左辺のポテンシャルを決める。そのため、仮の密度で
方程式を解き、得られた密度でポテンシャルを更新する。入力と出力の密度が
許容誤差内で一致するまで繰り返す計算を、自己無撞着計算（SCF）という。
固有値には密度が作るポテンシャルの寄与がすでに入っているため、
全エネルギーは :eq:`dft-ks-energy` に沿って各項を評価する。

.. _exchange-correlation-functional:

LDAとGGA（PBE）
---------------

交換相関汎関数は、位置ごとの電子密度を入力とし、交換相関エネルギーを返す。
局所密度近似（local-density approximation, LDA）は、位置ごとに
その点と同じ密度の一様電子ガスの値を使う。密度 :math:`n` の
一様電子ガスでの電子1個あたりの交換相関エネルギーを
:math:`\epsilon_{\rm xc}^{\rm unif}(n)` とすると、

.. math::
   :label: dft-lda-energy

   E_{\rm xc}^{\rm LDA}[n]=\int
   n(\boldsymbol r)\,\epsilon_{\rm xc}^{\rm unif}(n(\boldsymbol r))\,d\boldsymbol r.

となる。局所性の目安は、密度が変化する距離 :math:`n/|\nabla n|` と、
その点の密度で決まるFermi波長を比べることである。密度の変化する距離が
Fermi波長より十分長い領域では、電子の波長ほど移動しても密度はほとんど
変わらない。LDAはこの緩やかな変化の極限で、一様系の値を局所的に用いる
[DftKohnSham1965]_。

一般化勾配近似（generalized gradient approximation, GGA）は密度に
加えてその勾配を用いる。PBEはPerdew、Burke、Ernzerhofが提案した
GGAの一つである [DftPbe1996]_。密度が一様な極限ではLDAと
一致するように作られている。密度の変化がある原子の間や表面では、
その勾配がエネルギーに影響する。

格子定数・相対エネルギーの汎関数依存
------------------------------------

同じ結晶でも、汎関数を変えると圧縮や膨張に伴うエネルギーの変化が変わり、
平衡体積も動く。多くの固体では、LDAは格子定数を短めに、PBEは長めに
与える傾向がある。ずれの向きや大きさは材質や結合の性質に依存する
[DftPbesol2008]_ [DftNishimatsu2010]_。

内側の原子をわずかに動かすとエネルギーが下がる材料では、その低下量が
体積やひずみに敏感なことがある。BaTiO₃についてNishimatsuらは、
交換相関汎関数の違いが格子定数や極性変位のエネルギー面に現れ、
有効ハミルトニアンで見積もる転移温度にも影響することを示した
[DftNishimatsu2010]_。
`BaTiO₃の安定基底状態 <https://example.quloud-platform.quemix.com/BaTiO3/stability.html>`__
では、相対エネルギー差が小さい低温相を比較している。汎関数の影響を
検討するときは、同じ格子と原子配置に対するエネルギー差と、各汎関数で
構造を緩和した後のエネルギー差を比べる。後者には、緩和で格子と原子配置が
変わった効果も入る。

有限温度の実験格子定数と比較すると、差には交換相関汎関数の近似に加えて
熱膨張など温度の効果も含まれる。汎関数の違いに着目するなら、
電子状態計算の数値条件を収束させ、比較する温度・圧力・構造を明示する。

.. _dft-dirac-exchange-example:

説明用の事例：電子密度を倍にしたときのLDA交換
---------------------------------------------

交換だけを取り出すと、一様電子ガスの式からLDAでの密度依存を追える。
スピン分極のない3次元電子ガスを絶対零度で考える。電子は波数空間の
半径 :math:`k_{\rm F}` の球（Fermi球）を満たす。単位体積・スピンあたりの
状態数 :math:`1/(2\pi)^3` を球の体積に掛け、スピンの2通りを数えると、

.. math::
   :label: dft-fermi-sphere-density

   n=\frac{2}{(2\pi)^3}\frac{4\pi k_{\rm F}^3}{3}
     =\frac{k_{\rm F}^3}{3\pi^2},\qquad
   k_{\rm F}=(3\pi^2 n)^{1/3}.

この波数から、LDAの節で使った局所的なFermi波長 :math:`2\pi/k_{\rm F}` が
求まる。原子単位で、一様系の電子1個あたりの交換エネルギーは
:math:`\epsilon_{\rm x}^{\rm unif}=-3k_{\rm F}/(4\pi)` である。
:eq:`dft-fermi-sphere-density` を代入し、電子数密度を掛けると、
:eq:`dft-lda-energy` の交換部分が得られる [DftDirac1930]_。

.. math::
   :label: dft-dirac-exchange-density

   \begin{gathered}
   n\,\epsilon_{\rm x}^{\rm unif}(n)
      =-\frac{3}{4\pi}\,n(3\pi^2 n)^{1/3}
      =-\frac{3}{4}\left(\frac{3}{\pi}\right)^{1/3} n^{4/3},\\
   E_{\rm x}^{\rm LDA}[n]
      =-\frac{3}{4}\left(\frac{3}{\pi}\right)^{1/3}
        \int n(\boldsymbol r)^{4/3}\,d\boldsymbol r.
   \end{gathered}

密度を0.01から0.02 bohr⁻³に倍増すると、交換エネルギーの絶対値は
電子1個あたりで :math:`2^{1/3}\simeq 1.260` 倍、単位体積あたりで
:math:`2^{4/3}\simeq 2.520` 倍になる。単位体積あたりでは、その体積に
含まれる電子数も倍になる。

.. list-table:: 一様電子ガスの交換エネルギー
   :header-rows: 1
   :widths: 22 22 28 28

   * - 密度 (bohr⁻³)
     - Fermi波数 (bohr⁻¹)
     - 電子1個あたり (Ha)
     - 単位体積あたり (Ha/bohr³)
   * - 0.01
     - 0.66651
     - −0.15912
     - −0.0015912
   * - 0.02
     - 0.83975
     - −0.20048
     - −0.0040095

この表では密度が高いほど交換によるエネルギー低下が大きい。結晶の平衡体積は、
核間反発、電子の運動エネルギー、相関などを含めた全エネルギーの極小で決まる。
交換部分の密度依存は圧縮で動く項の一つである。

.. _dft-interpretation-limits:

解釈と限界
----------

* **近似の種類。** 一様電子ガスの表ではスピンの占有が等しく、交換だけを計算した。
  磁性がある系ではスピンごとの密度が交換に効く。実用のLDAやGGAでは相関も加え、
  その近似を通じて計算結果が変わる。
* **汎関数の差と数値誤差。** 汎関数を比べる計算では、同じ格子と原子位置で
  相対エネルギーを求めると、緩和で生じる差を切り分けられる。基底や :ref:`k点<kpoint_sampling>`
  の誤差がその相対エネルギー差に近い場合は、汎関数を変えた効果を見分けにくい。
* **構造と有限温度。** 小さな格子定数のずれでも、ひずみと結びついた相の
  エネルギー差には大きく効く場合がある。0 Kの計算で近い格子定数を与えた
  汎関数でも、有限温度の相境界を比べるには振動や熱膨張の寄与を考える。

関連資料
--------

* :ref:`電子の占有数<fermi-level-and-occupation>`
* :doc:`spin_restriction`

参考文献
--------

.. [DftHohenberg1964] P. Hohenberg and W. Kohn, *Phys. Rev.* **136**,
   B864–B871 (1964). `doi:10.1103/PhysRev.136.B864 <https://doi.org/10.1103/PhysRev.136.B864>`_.
.. [DftKohnSham1965] W. Kohn and L. J. Sham, *Phys. Rev.* **140**,
   A1133–A1138 (1965). `doi:10.1103/PhysRev.140.A1133 <https://doi.org/10.1103/PhysRev.140.A1133>`_.
.. [DftPbe1996] J. P. Perdew, K. Burke, and M. Ernzerhof, *Phys. Rev. Lett.*
   **77**, 3865–3868 (1996).
   `doi:10.1103/PhysRevLett.77.3865 <https://doi.org/10.1103/PhysRevLett.77.3865>`_.
.. [DftDirac1930] P. A. M. Dirac, *Proc. Cambridge Philos. Soc.* **26**,
   376–385 (1930).
   `doi:10.1017/S0305004100016108 <https://doi.org/10.1017/S0305004100016108>`_.
.. [DftPbesol2008] J. P. Perdew et al., *Phys. Rev. Lett.* **100**, 136406 (2008).
   `doi:10.1103/PhysRevLett.100.136406 <https://doi.org/10.1103/PhysRevLett.100.136406>`_.
.. [DftNishimatsu2010] T. Nishimatsu, M. Iwamoto, Y. Kawazoe, and U. V. Waghmare,
   *Phys. Rev. B* **82**, 134106 (2010).
   `doi:10.1103/PhysRevB.82.134106 <https://doi.org/10.1103/PhysRevB.82.134106>`_.
