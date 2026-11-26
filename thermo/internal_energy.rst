.. _internal_energy:

==============================
内部エネルギー
==============================

------------------------------
内部エネルギー（全エネルギー）
------------------------------

系を構成する要素の運動エネルギーとポテンシャルエネルギーの和

.. math::
    U = T_{\rm kin} + V_{\rm pot}
    :label: inte1

であり、力学でエネルギー保存則などを議論するときの、あのエネルギーである。\
系の「全エネルギー」と呼ぶ事も多い。電子とイオン（または原子核）からなる材料系の場合は

.. math::
    U = T_{\rm ion} + V_{\rm ion-ion} + T_{\rm ele} + V_{\rm ele-ele} + V_{\rm ele-ion}  ,
    :label: inte2

と書ける。各項の意味は大体察しが付くだろう。\
:math:`\rm ele` の添え字を含む後半の３項は電子が関与するため、\
通常は量子力学的に扱う事が求められる。\
その場合にはハミルトニアンと呼ばれる演算子

.. math::
    \hat{H}
    \equiv
    \hat{T}_{\rm ele} + \hat{V}_{\rm ele-ele} + \hat{V}_{\rm ele-ion} ,
    :label: inte3

を定義し、これの期待値を計算する。電子系の温度依存性をまともに考慮する場合は

.. math::
    \left< \hat{H} \right>
    =
    \frac{Tr\left(\hat{H}e^{-\beta\hat{H}}\right)}{Tr\left(e^{-\beta\hat{H}}\right)}
    :label: inte4

という計算を行う事になるが、多くの場合はSchrödinger方程式

.. math::
    \hat{H} \Phi_{\rm n} = E_{\rm n} \Phi_{\rm n}
    :label: inte5

の基底状態のエネルギー固有値 :math:`E_0` を用いる。\
これは電子系の第一励起状態が基底状態から eV のオーダーで離れていれば（バンドギャップなど）、かなり良い近似である。\
室温（300 K）の熱エネルギー :math:`kT` は約 0.026 eV である。励起エネルギーを :math:`\Delta E` とすると、\
:eq:`inte4` のトレースで励起状態の重みは基底状態の :math:`e^{-\Delta E/kT}` 倍で、:math:`\Delta E=1` eV では約 :math:`10^{-17}` 倍になるので、\
期待値は基底状態の項だけで決まる。\
通常、多電子系のSchrödinger方程式 :eq:`inte5` は、基底状態に対しても容易には解けないため、\
実用的には、密度汎関数法（DFT = Density Functional Theory）等を用いて基底状態エネルギーの計算が行われる。\
DFTに基づく第一原理計算ソフトでは :eq:`inte2` の :math:`V_{\rm ion-ion}` まで含め、\
イオンの座標（まとめて :math:`\boldsymbol{R}_{\rm ion}` と記すことにする）を与えれば\
確定する成分、すなわちイオンのポテンシャルエネルギーと解釈できる部分を全エネルギー\
として出力するものが多い。以上を踏まえて :eq:`inte2` を書き直すと、

.. math::
    U = T_{\rm ion} + E_{\rm DFT}\left(\boldsymbol{R}_{\rm ion}\right)
    :label: inte6

と書けて、これが :eq:`inte1` 式に対応するものとなる。
