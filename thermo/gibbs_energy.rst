.. _gibbs_energy:

==============================
ギブス自由エネルギー
==============================


------------------------------------
標準反応ギブスエネルギー
------------------------------------

.. math::
    \Delta_r G^o = \Delta_r H^o - T \Delta_r S^o


------------------------------------
標準生成ギブスエネルギー
------------------------------------


.. _chemical-potential:

------------------------------------
化学ポテンシャル
------------------------------------

物質が相の間を移るか、反応がどちらへ進むかは、成分ごとの化学ポテンシャルで決まる。
温度 :math:`T`、圧力 :math:`p` と、各成分 :math:`i` の物質量 :math:`n_i` を変数として
ギブス自由エネルギー :math:`G(T,p,n_1,\ldots,n_k)` をみると、その微小変化は

.. math::
   :label: thermo-gibbs-differential

   dG=-S\,dT+V\,dp+\sum_i\mu_i\,dn_i

と書ける [ThermoCallen1985]_。:math:`S` はエントロピー、:math:`V` は体積である。係数

.. math::
   :label: thermo-chemical-potential

   \mu_i=\left(\frac{\partial G}{\partial n_i}\right)_{T,p,n_{j\neq i}}

を成分 :math:`i` の **化学ポテンシャル** と呼ぶ。温度・圧力とほかの成分の量を固定して、
成分 :math:`i` を少し加えたときの :math:`G` の増え方である。単位はJ/molである。

**ギブス自由エネルギーとの関係。** 温度と圧力を固定して系の全成分を :math:`\lambda` 倍すると、
:math:`G` も :math:`\lambda` 倍になる。:math:`G(T,p,\lambda n_1,\ldots,\lambda n_k)=\lambda G(T,p,n_1,\ldots,n_k)`
の両辺を :math:`\lambda` で微分して :math:`\lambda=1` とおくと、:eq:`thermo-chemical-potential`\ から

.. math::
   :label: thermo-gibbs-euler

   G=\sum_i n_i\mu_i

を得る。純物質では :math:`\mu=G/n` で、化学ポテンシャルは1 molあたりのギブス自由エネルギーに等しい。
**反応ギブスエネルギー。** 反応 :math:`\sum_i\nu_i\mathrm A_i=0`\ （:math:`\nu_i` は生成物で正、反応物で負の
化学量論係数）の進み具合を反応進行度 :math:`\xi`\ （単位はmol）で表すと、反応が :math:`d\xi` だけ進むとき
各成分の物質量は :math:`dn_i=\nu_i\,d\xi` だけ変わる。これを\ :eq:`thermo-gibbs-differential`\ に入れると、
温度と圧力が一定のもとで

.. math::
   :label: thermo-reaction-gibbs

   \Delta_r G\equiv\left(\frac{\partial G}{\partial\xi}\right)_{T,p}=\sum_i\nu_i\mu_i

を得る。:math:`\Delta_r G` は、その時点の組成で反応を微小に進めたときの :math:`G` の変化率である。
反応が有限量進むと組成が変わり、各 :math:`\mu_i` も変わるので、:math:`G` の有限の変化は
:eq:`thermo-reaction-gibbs`\ を :math:`\xi` について積分したものになる。
各成分が\ :ref:`標準状態<standard_state>`\ にあるときの\ :eq:`thermo-reaction-gibbs`\ の値が、
前の節の標準反応ギブスエネルギー :math:`\Delta_r G^o=\sum_i\nu_i\mu_i^o` である。

**相平衡の条件。** 同じ温度・圧力の2つの相 :math:`\alpha`、:math:`\beta` の間で、成分 :math:`i` を
:math:`dn` だけ :math:`\alpha` から :math:`\beta` へ移すと、:eq:`thermo-gibbs-differential`\ から

.. math::
   :label: thermo-transfer

   dG=\left(\mu_i^\beta-\mu_i^\alpha\right)dn

となる。温度と圧力が一定のとき、自発的な変化は :math:`G` を下げる向きに進むので、
成分は化学ポテンシャルの高い相から低い相へ移る。平衡では :math:`dn` の正負どちらに対しても
:math:`dG=0` なので、

.. math::
   :label: thermo-phase-equilibrium

   \mu_i^\alpha=\mu_i^\beta

が成り立つ。反応についても同じ考え方で、平衡では :math:`\sum_i\nu_i\mu_i=0` になる。
例えば酸素分子と酸素原子の平衡 :math:`\mathrm O_2\rightleftharpoons2\mathrm O` からは
:math:`\mu_{\mathrm O}=\mu_{\mathrm O_2}/2` が従う。

**理想気体の圧力依存性。** :eq:`thermo-gibbs-differential`\ で :math:`G` の2階微分の順序を入れ替えると
:math:`(\partial\mu_i/\partial p)_{T,n}=(\partial V/\partial n_i)_{T,p}` で、純物質の右辺は1 molあたりの体積
:math:`V_{\rm m}` である。理想気体では :math:`V_{\rm m}=RT/p`\ （:math:`R` は気体定数）なので、
標準圧力 :math:`p^o=1\,\mathrm{bar}` から :math:`p` まで積分すると

.. math::
   :label: thermo-ideal-gas-mu

   \mu(T,p)=\mu^o(T)+RT\ln\frac{p}{p^o}

となる。:math:`\mu^o(T)` は温度 :math:`T` の標準状態での値である。理想気体の混合物では、
:math:`p` を成分の分圧に置き換える。

**1粒子あたりの値。** 第一原理計算や統計力学では、化学ポテンシャルを1粒子（1原子や1分子）
あたりのエネルギーで表すことが多い。1 molあたりの値をアボガドロ定数 :math:`N_{\rm A}` で割ると
1粒子あたりの値になり、:math:`R/N_{\rm A}=k_{\rm B}`\ （ボルツマン定数）なので、
:eq:`thermo-ideal-gas-mu`\ の第2項は :math:`k_{\rm B}T\ln(p/p^o)` になる。
1 eV/粒子は96.485 kJ/molにあたる。分圧を10倍にすると化学ポテンシャルは :math:`k_{\rm B}T\ln10` だけ上がり、
300 Kで0.0595 eV（5.74 kJ/mol）、1100 °C（1373 K）で0.272 eVである。
高温の気相と原子をやりとりする表面では、分圧を1けた変えるだけで0.1 eVを超える差が生じる。

**固体の化学ポテンシャルと全エネルギー。** 単体の固体では、:eq:`thermo-gibbs-euler`\ から
:math:`\mu=G/N=(E+pV-TS)/N`\ （:math:`N` は原子数、:math:`E` は内部エネルギー）である。
1 barでの :math:`pV` は1原子あたりの体積を20 Å\ :sup:`3`\ としても約 :math:`1\times10^{-5}` eVで、
無視できる。絶対零度で零点振動も無視すると、:math:`\mu` は1原子あたりの全エネルギーで近似できる。
第一原理計算で原子の出入りを含むエネルギーを比べるとき、単体の固体や孤立分子の全エネルギーを
化学ポテンシャルの基準に使うのはこのためである。気相では、全エネルギーに
温度と分圧に依存する部分を加える（`GaN表面の相図 <https://example.quloud-platform.quemix.com/gan_surface/phase_diagram.html>`__\ の気相の化学ポテンシャル）。

同じ定義を電子に使ったものが、フェルミ–ディラック分布に現れる
:ref:`電子の化学ポテンシャル<fermi-dirac-distribution>`\ である。2つの物質を接触させて電子が行き来できるとき、
:eq:`thermo-phase-equilibrium`\ と同じ理由で、平衡では両者のフェルミ準位がそろう。
ただし、そろうのは静電ポテンシャルによるエネルギーを含め、共通のエネルギー基準（例えば真空準位）で測った
電子の化学ポテンシャル（電気化学ポテンシャル）である。物質ごとに価電子帯上端などから測った値はそろわない。

------------------------------------
参考文献
------------------------------------

.. [ThermoCallen1985] H. B. Callen, *Thermodynamics and an Introduction to Thermostatistics*,
   2nd ed., Wiley (1985).
