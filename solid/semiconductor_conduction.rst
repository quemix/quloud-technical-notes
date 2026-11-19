.. _semiconductor-conduction:

半導体の電気伝導
================

半導体で電流を運ぶのは伝導帯の電子と価電子帯の正孔である。弱い一様な電場を
仮定し、両者の移動度とキャリア密度から真性半導体の伝導率を求める。
キャリア密度には :ref:`fermi-level-and-occupation` の占有数を使う。

電子・正孔と電気伝導率
----------------------

熱や光によって電子が価電子帯から伝導帯に励起されると、価電子帯には空いた状態
である正孔が生じる。電子と正孔の数密度をそれぞれ :math:`n_{\mathrm e},n_{\mathrm h}`、
移動度を :math:`\mu_{\mathrm e},\mu_{\mathrm h}`、電気素量を :math:`e` とすると、
伝導率は両者の寄与の和である。

.. math::
   :label: conductivity

   \sigma=e(n_{\mathrm e}\mu_{\mathrm e}+n_{\mathrm h}\mu_{\mathrm h})

電子のドリフトは電場と逆向き、正孔のドリフトは電場と同じ向きである。
電荷の符号も逆なので、どちらの電流も電場と同じ向きに流れる。

.. _carrier-mobility:

有効質量・緩和時間と移動度
--------------------------

バンド端付近の分散を放物線で近似すると、その曲率を有効質量で表せる。
例えば等方的な伝導帯の底では、底からの波数のずれを :math:`q` として、エネルギーは
:math:`E_{\mathrm c}+\hbar^2q^2/(2m_{\mathrm e}^*)` である。曲率が大きいほど
有効質量は小さい。価電子帯の頂上では、分散の下向きの曲率の大きさから正孔の
正の有効質量 :math:`m_{\mathrm h}^*` を定める。

一様な電場 :math:`E` に対する電子のドリフト速度を :math:`v_{\mathrm{de}}` とすると、

.. math::
   :label: v(de)

   v_{\mathrm{de}}=-\mu_{\mathrm e}E

である。バンド端近くの電子の応答を有効質量 :math:`m_{\mathrm e}^*` で表し、
散乱によって平均のドリフト速度が緩和時間 :math:`\tau_{\mathrm e}` で減衰すると
仮定すると、平均速度 :math:`v` の運動方程式は

.. math::
   :label: equation_of_motion

   m_{\mathrm e}^*\frac{\mathrm dv}{\mathrm dt}
   =-eE-\frac{m_{\mathrm e}^*v}{\tau_{\mathrm e}}

となる。定常状態で左辺をゼロとおくと、

.. math::
   :label: v(de)_2

   v_{\mathrm{de}}=-\frac{e\tau_{\mathrm e}}{m_{\mathrm e}^*}E

を得る。式 :eq:`v(de)` と比較すると電子の移動度は

.. math::
   :label: mu(e)

   \mu_{\mathrm e}=\frac{e\tau_{\mathrm e}}{m_{\mathrm e}^*}

となる。正孔は電荷 :math:`+e` を持つキャリアとして扱い、
正の有効質量 :math:`m_{\mathrm h}^*` と緩和時間 :math:`\tau_{\mathrm h}` を使う。
同じ手順で正孔のドリフト速度と移動度は

.. math::
   :label: v(dh)

   v_{\mathrm{dh}}=\mu_{\mathrm h}E

.. math::
   :label: mu(h)

   \mu_{\mathrm h}=\frac{e\tau_{\mathrm h}}{m_{\mathrm h}^*}

となる。どちらのキャリアも、緩和時間が長いほど、また有効質量が小さいほど移動度が大きい。

.. _conduction-band-electrons:

伝導帯の電子密度
----------------

伝導帯の下端を :math:`E_{\mathrm c}`、単位体積あたりの状態密度を
:math:`g_{\mathrm c}(E)` とする。:ref:`density-of-states` の単位胞あたりの状態密度から
この規格化に移るには、対象とするバンドとスピンの寄与を足し、単位胞の体積で割る。
1状態あたりの占有数 :math:`f(E)` を掛けて積分すると、

.. math::
   :label: n(e)

   n_{\mathrm e}=\int_{E_{\mathrm c}}^\infty g_{\mathrm c}(E)f(E)\,\mathrm dE

を得る。三次元で、スピン縮退を含む一つの等方的な放物線バンドを仮定すると、

.. math::
   :label: g_c(E)

   g_{\mathrm c}(E)=\frac{\sqrt{2}(m_{\mathrm e}^*)^{3/2}}{\pi^2\hbar^3}
                    \sqrt{E-E_{\mathrm c}}

である。:math:`E_{\mathrm c}-\mu\gg k_{\mathrm B}T` なら、占有数を
ボルツマン近似 :eq:`f(E)_2` で置ける。変数 :math:`x=E-E_{\mathrm c}` を使うと、
積分に残る :math:`\int_0^\infty x^{1/2}e^{-x/(k_{\mathrm B}T)}\,\mathrm dx` は
:math:`(\sqrt{\pi}/2)(k_{\mathrm B}T)^{3/2}` である。したがって、

.. math::
   :label: n(e)_2

   n_{\mathrm e}=N_{\mathrm c}\exp\!\left[-\frac{E_{\mathrm c}-\mu}{k_{\mathrm B}T}\right],
   \qquad N_{\mathrm c}=2\left(\frac{m_{\mathrm e}^*k_{\mathrm B}T}{2\pi\hbar^2}\right)^{3/2}

となる。:math:`N_{\mathrm c}` を伝導帯の有効状態密度と呼ぶ。

.. _valence-band-holes:

価電子帯の正孔密度
------------------

価電子帯の上端を :math:`E_{\mathrm v}` とする。正孔は電子が占有していない
状態なので、正孔密度は

.. math::
   :label: n(h)

   n_{\mathrm h}=\int_{-\infty}^{E_{\mathrm v}} g_{\mathrm v}(E)[1-f(E)]\,\mathrm dE

である。上に凸の等方的な放物線バンドでは、スピン縮退を含む状態密度は

.. math::
   :label: g_v(E)

   g_{\mathrm v}(E)=\frac{\sqrt{2}(m_{\mathrm h}^*)^{3/2}}{\pi^2\hbar^3}
                    \sqrt{E_{\mathrm v}-E}

となる。:math:`\mu-E_{\mathrm v}\gg k_{\mathrm B}T` なら正孔の確率を
ボルツマン近似 :eq:`1-f(E)` で置ける。変数を :math:`x=E_{\mathrm v}-E` に
換えると伝導帯の場合と同じ積分になり、

.. math::
   :label: n(h)_2

   n_{\mathrm h}=N_{\mathrm v}\exp\!\left[-\frac{\mu-E_{\mathrm v}}{k_{\mathrm B}T}\right],
   \qquad N_{\mathrm v}=2\left(\frac{m_{\mathrm h}^*k_{\mathrm B}T}{2\pi\hbar^2}\right)^{3/2}

を得る。:math:`N_{\mathrm v}` は価電子帯の有効状態密度である。

.. _intrinsic-semiconductor:

真性半導体のキャリア密度と電気伝導率
------------------------------------

不純物からキャリアの供給がない真性半導体では、熱平衡で伝導帯に励起された電子
1個につき価電子帯に正孔が1個生じるので
:math:`n_{\mathrm e}=n_{\mathrm h}=n_{\mathrm i}` である。
式 :eq:`n(e)_2` と式 :eq:`n(h)_2` を掛けると化学ポテンシャルが消え、
バンドギャップ :math:`E_{\mathrm g}=E_{\mathrm c}-E_{\mathrm v}` を使って

.. math::
   :label: n(i)

   n_{\mathrm i}=\sqrt{n_{\mathrm e}n_{\mathrm h}}
   =\sqrt{N_{\mathrm c}N_{\mathrm v}}\exp\!\left(-\frac{E_{\mathrm g}}{2k_{\mathrm B}T}\right)

と書ける。この密度を式 :eq:`conductivity` に入れると、

.. math::
   :label: conductivity_2

   \sigma=e n_{\mathrm i}(\mu_{\mathrm e}+\mu_{\mathrm h})
   =e(\mu_{\mathrm e}+\mu_{\mathrm h})\sqrt{N_{\mathrm c}N_{\mathrm v}}
     \exp\!\left(-\frac{E_{\mathrm g}}{2k_{\mathrm B}T}\right)

となる。式 :eq:`mu(e)` と式 :eq:`mu(h)` で移動度を置けば、

.. math::
   :label: conductivity_3

   \sigma=2e^2\left(\frac{k_{\mathrm B}T}{2\pi\hbar^2}\right)^{3/2}
   (m_{\mathrm e}^*m_{\mathrm h}^*)^{3/4}
   \left(\frac{\tau_{\mathrm e}}{m_{\mathrm e}^*}+
         \frac{\tau_{\mathrm h}}{m_{\mathrm h}^*}\right)
   \exp\!\left(-\frac{E_{\mathrm g}}{2k_{\mathrm B}T}\right)

を得る。例えば温度と有効質量を固定すると、ギャップが大きいほど熱励起された
キャリアの密度は指数関数的に小さくなる。実測の伝導率には移動度の温度依存も入る。
ドーピングがあれば電子と正孔の密度は一般に異なり、複数のバンドや谷が寄与する場合は
各状態密度を足して計算する。

参考資料
--------

* Jesús A. del Alamo, MIT OpenCourseWare, `Integrated Microelectronic Devices, Lecture 3 <https://ocw.mit.edu/courses/6-720j-integrated-microelectronic-devices-spring-2007/1bccffbfa7b4487be99b8af8b46186ef_lecture3.pdf>`_.
* Jesús A. del Alamo, MIT OpenCourseWare, `Integrated Microelectronic Devices, Lecture 6 <https://ocw.mit.edu/courses/6-720j-integrated-microelectronic-devices-spring-2007/resources/lecture6/>`_.
