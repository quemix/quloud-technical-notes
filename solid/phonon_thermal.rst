.. _phonon-thermal:

格子振動の熱的性質
==================

\ :ref:`調和近似<harmonic-approximation>`\ では、結晶の振動は独立な調和振動子の集まり（\ :ref:`基準振動<ph-normal-modes>`）に分かれる。
本稿では、量子化した振動子のエネルギーから、絶対零度でも残る零点振動と、有限温度の振動エネルギー・比熱・
自由エネルギーを求める。続いて、2次の展開を超える非調和性と、振動数の体積依存性から生じる熱膨張を
準調和近似で扱い、この近似を使える条件を確かめる。

**前提知識**: :ref:`調和近似とフォノン<phonon>`\ （とくに\ :ref:`基準振動とフォノン<ph-normal-modes>`、:ref:`虚数振動数と動的安定性<imaginary-frequency>`）、
:ref:`エネルギー等分配<temperature>`、統計力学のカノニカル分布。

**学習目標**:

* 零点エネルギーと零点振動を調和振動子の量子効果として求め、構造の安定性の順序や転移温度に影響しうることを説明する。
* Bose–Einstein分布からモードの平均エネルギーと比熱を求め、高温で古典論の値に近づくことを示す。
* 分配関数から振動の自由エネルギーを導き、準調和近似で熱膨張とGrüneisen定数を説明する。
* 準調和近似を使える条件と、非調和性をあらわに扱う必要がある場合を区別する。

.. _zero-point-vibration:

零点振動と零点エネルギー
------------------------

調和振動子の基底状態のエネルギーは0でなく :math:`\hbar\omega/2` である。結晶全体では

.. math::
   :label: ph-zpe

   E_{\mathrm{ZP}}=\sum_{\boldsymbol k,s}\frac12\hbar\omega_s(\boldsymbol k)

が絶対零度でも残り、これを **零点エネルギー** と呼ぶ。基底状態の振幅の2乗平均は
:math:`\langle Q^2\rangle=\hbar/(2\omega)` であり、原子は0 Kでも平衡位置のまわりに広がっている
（**零点振動**）。:math:`Q` は質量の平方根を含むので、質量 :math:`m` の原子1個だけが動く
モードでは変位の2乗平均が :math:`\hbar/(2m\omega)` になり、軽い原子や振動数の低いモードほど大きい。

零点エネルギーは構造ごとに異なるので、静止した原子で計算した全エネルギーの差が小さい二つの
構造では、:eq:`ph-zpe` の差で安定性の順序が変わることがある。原子核の量子揺らぎは、
相転移の温度も変える。ZhongとVanderbiltは、第一原理計算に基づく有効ハミルトニアンを
経路積分モンテカルロ法で解いた [Zhong1996]_。SrTiO\ :sub:`3`\ では量子揺らぎが強誘電転移を完全に抑え、:ref:`八面体回転<sm-octahedral-rotation>`\ の転移温度を130 Kから110 Kに下げた。BaTiO\ :sub:`3`\ では転移温度が35〜50 K下がった。

.. _phonon-mean-energy:

有限温度の振動エネルギーと比熱
------------------------------

温度 :math:`T` では、振動数 :math:`\omega` のモードの平均エネルギーは、**Bose–Einstein分布** の
占有数 :math:`n_{\mathrm B}=1/(e^{\hbar\omega/k_{\mathrm B}T}-1)` を使って

.. math::
   :label: ph-mean-energy

   \langle E\rangle=\hbar\omega\left(n_{\mathrm B}+\frac12\right)

となる。:math:`x=\hbar\omega/k_{\mathrm B}T` が小さい高温では
:math:`1/(e^x-1)=1/x-1/2+x/12+O(x^3)` より :math:`\langle E\rangle=k_{\mathrm B}T+(\hbar\omega)^2/(12k_{\mathrm B}T)+\cdots`
で、主要項は古典論の\ :ref:`エネルギー等分配<temperature>`\ の値 :math:`k_{\mathrm B}T` に一致する。
:math:`k_{\mathrm B}T\ll\hbar\omega` の低温では、モードはほぼ基底状態にとどまり、温度を上げても
エネルギーがほとんど増えない。

.. _phonon-heat-capacity:

モードの平均エネルギーを温度で微分すると、そのモードの定積熱容量が求まる。結晶全体では

.. math::
   :label: ph-heat-capacity

   C_V=\sum_{\boldsymbol k,s}k_{\mathrm B}\frac{x_s^2e^{x_s}}{(e^{x_s}-1)^2},\qquad
   x_s=\frac{\hbar\omega_s(\boldsymbol k)}{k_{\mathrm B}T}

となる。:math:`x_s\to0` の高温では各モードの寄与が :math:`k_{\mathrm B}` に近づき、:math:`n` 原子の単位胞を
:math:`N_{\mathrm c}` 個並べた結晶全体で :math:`3nN_{\mathrm c}k_{\mathrm B}`、すなわち原子1個あたり :math:`3k_{\mathrm B}` になる
（Dulong–Petitの法則）。:math:`x_s\gg1` の低温のモードは基底状態にとどまるので、寄与は :math:`k_{\mathrm B}x_s^2e^{-x_s}` と指数関数的に小さくなり、
比熱はDulong–Petitの値より小さくなる。
ただし3次元の結晶には、Γ点の近くで振動数が0に近づく音響分枝があるので、どんな低温でも励起されるモードが残る。
そのため低温の比熱は指数関数的ではなく、:math:`T^3` に比例して減る（Debyeの :math:`T^3` 則）。

.. _vibrational-free-energy:

振動の自由エネルギー
--------------------

振動数 :math:`\omega` の調和振動子の分配関数は、エネルギー :math:`\hbar\omega(n+1/2)` の等比級数の和

.. math::

   Z=\sum_{n=0}^{\infty}e^{-\hbar\omega(n+1/2)/k_{\mathrm B}T}
   =\frac{e^{-\hbar\omega/2k_{\mathrm B}T}}{1-e^{-\hbar\omega/k_{\mathrm B}T}}

である。独立なモードの自由エネルギーは足し合わせられるので、:math:`F=-k_{\mathrm B}T\ln Z` から、振動の
自由エネルギーは

.. math::
   :label: ph-vib-free-energy

   F_{\mathrm{vib}}(T)=\sum_{\boldsymbol k,s}\left[\frac12\hbar\omega_s(\boldsymbol k)
   +k_{\mathrm B}T\ln\left(1-e^{-\hbar\omega_s(\boldsymbol k)/k_{\mathrm B}T}\right)\right]

となる。第1項は零点エネルギー :eq:`ph-zpe` で、第2項は負なので、温度が上がると :math:`F_{\mathrm{vib}}` は下がる。
振動数の低いモードほど第2項が大きく負になるので、振動数の低いモードを多くもつ構造ほど、温度とともに
自由エネルギーが相対的に下がる。振動のエントロピーは :math:`S_{\mathrm{vib}}=-\partial F_{\mathrm{vib}}/\partial T` で求まる。
静止した原子の全エネルギーの差が小さい二つの構造では、この項で有限温度の安定性の順序が入れ替わることがある。

.. _anharmonicity:

非調和性
--------

:eq:`ph-expansion` で無視した3次以上の項を **非調和項** と呼ぶ。非調和項があると
基準振動 :eq:`ph-normal-modes` は互いに独立でなくなり、フォノンどうしがエネルギーをやり取りする。
その結果、フォノンは有限の寿命をもち、熱伝導率が有限になる。振動の振幅が温度とともに
大きくなると、平均的な力定数が変わり、振動数も温度に依存する。

虚数振動数をもつ構造でも、エネルギーが際限なく下がるわけではない。調和近似の
:math:`\frac12\omega_s^2Q^2` は小さい :math:`Q` での形にすぎず、変位が大きくなると4次などの
非調和項がエネルギーを押し上げる。曲率が負の原点と、大きい変位での壁の間に、
エネルギーの極小が現れる。この形を\ :ref:`二重井戸ポテンシャル<double-well-potential>`\ と呼び、虚数振動数をもつモードが
低温で凍結する\ :ref:`ソフトモード<soft-mode>`\ の考え方につながる。

.. _thermal-expansion:

熱膨張と準調和近似
------------------

厳密に調和的な結晶は熱膨張しない。力定数が体積によらなければ振動数も体積によらず、
振動の自由エネルギーは体積の関数にならないので、平衡体積は温度で変わらない。
原子の平均位置も、放物線のポテンシャルでは平衡位置からずれない。

**準調和近似** では、各体積で調和近似を使い、振動数の体積依存性だけを取り入れる。
静止した原子の全エネルギー :math:`U(V)` に、各体積の振動数で求めた振動の自由エネルギー :eq:`ph-vib-free-energy` を加えた

.. math::
   :label: ph-qha-free-energy

   F(V,T)=U(V)+\sum_{\boldsymbol k,s}\left[\frac12\hbar\omega_s(\boldsymbol k;V)
   +k_{\mathrm B}T\ln\left(1-e^{-\hbar\omega_s(\boldsymbol k;V)/k_{\mathrm B}T}\right)\right]

を、外圧が0の場合に体積について最小にすると、温度 :math:`T` での平衡体積が求まる。
外圧 :math:`P_{\mathrm{ext}}` がかかっている場合は、:math:`F+P_{\mathrm{ext}}V` を最小にする [Baroni2010]_。
角括弧の中を :math:`\omega` で微分すると :math:`\hbar(n_{\mathrm B}+1/2)=\langle E\rangle/\omega` になるので、モードごとの **Grüneisen定数**

.. _gruneisen-parameter:

.. math::
   :label: ph-gruneisen

   \gamma_s(\boldsymbol k)=-\frac{\partial\ln\omega_s(\boldsymbol k)}{\partial\ln V}

を使うと、圧力 :math:`P=-\partial F/\partial V` は

.. math::
   :label: ph-thermal-pressure

   P=-\frac{dU}{dV}+\frac1V\sum_{\boldsymbol k,s}\gamma_s(\boldsymbol k)\,\langle E_s(\boldsymbol k)\rangle

となる。第2項は振動による圧力である。体積を広げると振動数が下がる（:math:`\gamma>0`）通常の固体では
この項が正で、結晶は外へ押し広げられる。温度が上がると :math:`\langle E\rangle` が増えて体積が
大きくなる。:math:`\langle E\rangle` には零点エネルギーも含まれるので、0 Kでも平衡体積は
静止した原子の値より少し大きい。:math:`U(V)` を平衡体積のまわりで体積弾性率 :math:`B` を使って展開し、
すべてのモードが同じ :math:`\gamma` をもつとすると、熱膨張係数は
:math:`\alpha\simeq\gamma C_V/(BV)`\ （:math:`C_V` は式 :eq:`ph-heat-capacity` の定積熱容量）となる。これをGrüneisenの関係と呼ぶ。

.. _qha-applicability:

準調和近似は振動数の体積依存性だけを取り込み、一定体積でのフォノンどうしの相互作用は
無視する。式 :eq:`ph-qha-free-energy` の対数は、すべてのモードで :math:`\omega^2>0` のときにだけ
定義できるので、この近似を使えるのは、考える体積の範囲で\ :ref:`動的に安定<imaginary-frequency>`\ な構造に限る。
温度が高く振幅が大きい場合や、0 Kの計算で虚数振動数をもつ構造には、そのままでは使えない。

.. _phonon-thermal-batio3-example:

説明用の事例：BaTiO\ :sub:`3`\ の格子定数の計算値と実験値
----------------------------------------------------------------

`計算事例「格子定数」 <https://example.quloud-platform.quemix.com/BaTiO3/lattice-constant.html>`_\ は、4相の格子定数をDFT（OpenMX、Quantum ESPRESSO）と機械学習原子間ポテンシャルで求め、実験値と
比べている。計算値は静止した原子の0 Kの最適化構造であり、実験値は各相が安定に存在する
有限温度で測られている。両者の差には、:eq:`ph-thermal-pressure` の熱膨張と零点振動による
体積の増加に加えて、\ :ref:`交換相関汎関数<exchange-correlation-functional>`\ の近似によるずれも含まれる。立方晶相は0 Kでは不安定モードをもつので、0 Kの立方晶の格子定数は、
対称性を課して得た鞍点の構造の値である（\ :ref:`立方晶BaTiO₃の不安定なΓ点モード<phonon-batio3-example>`）。

この差のうち、熱膨張と零点振動による部分を準調和近似で見積もれるのは、全モードの :math:`\omega^2` が正の構造だけである
（\ :ref:`適用できる条件<qha-applicability>`）。立方晶相は0 Kの計算で虚数振動数をもち、有限温度では大きな振幅の非調和な
運動で平均構造が立方晶に保たれている（\ :ref:`ソフトモード<soft-mode>`）。そのため、立方晶の構造に式 :eq:`ph-qha-free-energy` を
そのまま当てはめて、実験の立方晶の格子定数と比べることはできない。そのような相の格子定数の温度変化は、
\ :ref:`分子動力学法<molecular-dynamics>`\ など、非調和な運動を含む有限温度の計算で調べる。ほかの相についても、
準調和近似を使う前に、その相のフォノンに虚数振動数が無いことを確かめる必要がある。事例でも、フォノンによる
動的安定性の確認と零点振動の評価を、残る課題に挙げている。

.. _phonon-thermal-limits:

解釈と限界
----------

本稿の式は、各モードを独立な調和振動子とみなす近似に基づく。準調和近似で取り込む非調和性は振動数の
体積依存性だけで、一定体積でのフォノンどうしの相互作用（フォノンの寿命や、振動数の温度依存性）は含まない。
融点に近い高温や、振幅の大きい軽い原子では、これらの効果が無視できなくなる。

零点振動も、調和近似の範囲では振動数から決まる量として扱った。軽い原子や、浅い二重井戸をもつ系では、原子核の
量子揺らぎが非調和なポテンシャルの形に敏感になり、経路積分などで扱う必要がある。

.. _phonon-thermal-related:

関連資料
--------

* :ref:`phonon`
* :ref:`soft-mode`
* :ref:`temperature`
* :ref:`heating-simulation`

.. _phonon-thermal-references:

.. _phonon-thermal-bibliography:

参考文献
--------

* N. W. Ashcroft and N. D. Mermin, *Solid State Physics* (Holt, Rinehart and
  Winston, 1976), Chaps. 23, 25.

.. [Zhong1996] W. Zhong and D. Vanderbilt, “Effect of quantum fluctuations on structural phase
   transitions in SrTiO\ :sub:`3` and BaTiO\ :sub:`3`,” *Physical Review B* **53**, 5047–5050 (1996),
   `doi:10.1103/PhysRevB.53.5047 <https://doi.org/10.1103/PhysRevB.53.5047>`_.
.. [Baroni2010] S. Baroni, P. Giannozzi, and E. Isaev, “Density-functional perturbation theory for
   quasi-harmonic calculations,” *Reviews in Mineralogy and Geochemistry* **71**, 39–57 (2010),
   `doi:10.2138/rmg.2010.71.3 <https://doi.org/10.2138/rmg.2010.71.3>`_.

.. raw:: html

   <script src="../_static/js/legacy-anchors.js" defer></script>
