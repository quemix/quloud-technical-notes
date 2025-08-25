.. _bayes:

------------------------------------
ベイズ推定
------------------------------------

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
パラメータの事後分布
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

パラメータに対する事前分布として、つぎの\ :ref:`ガウス分布<gaussian_dist>`\ を考える

.. math::
    p(\boldsymbol{w})
    =
    \mathcal{N}(\boldsymbol{w} | \boldsymbol{m}_0, \boldsymbol{S}_0)
    =
    \frac{1}{\sqrt{(2\pi)^M\left|\boldsymbol{S}_0\right|}}
    \exp{\left(
    -\frac{1}{2}
    (\boldsymbol{w}-\boldsymbol{m}_0)^\top
    \boldsymbol{S}_0^{-1}
    (\boldsymbol{w}-\boldsymbol{m}_0)
    \right)} .
    :label: bayes1

\ :math:`\boldsymbol{w}`\ （と入力\ :math:`\boldsymbol{X}`\ ）が与えられたときの
\ :math:`\boldsymbol{t}` の分布（\ :ref:`尤度関数<likelihood_function>`\ ）は、式 :eq:`ml3`

.. math::
  p(\boldsymbol{t} | \boldsymbol{X}, \boldsymbol{w})
  =
  \frac{1}{\sqrt{(2\pi)^N(\sigma_\varepsilon^2)^N}}
  \exp{\left(
  -\frac{1}{2\sigma_\varepsilon^2}
  (\boldsymbol{t}-\boldsymbol{\Phi}\boldsymbol{w})^\top
  (\boldsymbol{t}-\boldsymbol{\Phi}\boldsymbol{w})
  \right)}

でモデル化する。このときの :math:`\boldsymbol{w}` の事後分布を計算する

.. math::
    p(\boldsymbol{w} | \boldsymbol{X}, \boldsymbol{t})
    = \frac{
    p(\boldsymbol{t} | \boldsymbol{X}, \boldsymbol{w})
    p(\boldsymbol{w})
    }{p(\boldsymbol{t} | \boldsymbol{X})} ,
    :label: bayes2

.. math::
    p(\boldsymbol{t} | \boldsymbol{X})
    =
    \int p(\boldsymbol{t} | \boldsymbol{X}, \boldsymbol{w})
    p(\boldsymbol{w})d\boldsymbol{w} .
    :label: bayes3

式 :eq:`bayes2` の分子を書き下すと次のようになる
（\ :math:`\beta \equiv \sigma^{-2}_\varepsilon` とおく）


.. math::
    p(\boldsymbol{t} | \boldsymbol{X}, \boldsymbol{w})
    p(\boldsymbol{w})
    =
    \frac{1}{
    \sqrt{(2\pi)^{NM}(\beta^{-1})^N\left|\boldsymbol{S}_0\right|}
    }
    \exp{\left(
    -\frac{\beta}{2}
    \left( \boldsymbol{t} - \boldsymbol{\Phi}\boldsymbol{w} \right)^\top
    \left( \boldsymbol{t} - \boldsymbol{\Phi}\boldsymbol{w} \right)
    -\frac{1}{2}
    \left( \boldsymbol{w} - \boldsymbol{m}_0 \right)^\top
    \boldsymbol{S}^{-1}_0
    \left( \boldsymbol{w} - \boldsymbol{m}_0 \right)
    \right)} .
    :label: bayes4

これを :math:`\boldsymbol{w}` について整理する

.. math::
    p(\boldsymbol{t} | \boldsymbol{X}, \boldsymbol{w})
    p(\boldsymbol{w})
    \propto
    \exp{\left(
    -\frac{1}{2}
    (\boldsymbol{w}-\boldsymbol{m}_1)^\top
    \boldsymbol{S}_1^{-1}
    (\boldsymbol{w}-\boldsymbol{m}_1)
    \right)} .
    :label: bayes5

ここで、

.. math::
    \boldsymbol{S}_1^{-1}
    \equiv
    \boldsymbol{S}_0^{-1}
    +
    \beta \boldsymbol{\Phi}^\top \boldsymbol{\Phi} ,
    :label: bayes6

.. math::
    \boldsymbol{m}_1
    \equiv
    \boldsymbol{S}_1
    \left(
    \boldsymbol{S}_0^{-1} \boldsymbol{m}_0
    + \beta \boldsymbol{\Phi}^\top \boldsymbol{t}
    \right)
    :label: bayes7

とおいた。係数や\ :math:`\boldsymbol{w}` を含まない項は分母と打ち消し合うので、
結局 :eq:`bayes2` は、つぎの\ :ref:`ガウス分布<gaussian_dist>`\ となる

.. math::
    p(\boldsymbol{w} | \boldsymbol{X}, \boldsymbol{t})
    =
    \frac{1}{
    \sqrt{(2\pi)^{M} \left|\boldsymbol{S}_1\right|}
    }
    \exp{\left(
    -\frac{1}{2}
    (\boldsymbol{w}-\boldsymbol{m}_1)^\top
    \boldsymbol{S}_1^{-1}
    (\boldsymbol{w}-\boldsymbol{m}_1)
    \right)} .
    :label: bayes8

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
逐次学習
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

式 :eq:`pgp3` の :math:`N` 個のデータに加え、新たに :math:`N_2`
個のデータを得たという状況を考える

.. math::
    \boldsymbol{D}_2
    \equiv
    \{(\boldsymbol{x}_{N+1}, t_{N+1}), \; (\boldsymbol{x}_{N+2}, t_{N+2}),
    \; \dots \; (\boldsymbol{x}_{N+N_2}, t_{N+N_2}) \} .
    :label: bayes9

また、式 :eq:`pgp6` に対応する次式を定義しておく

.. math::
  \boldsymbol{\Phi}_2
  \equiv
  \begin{pmatrix}
  \phi_0(\boldsymbol{x}_{N+1}) & \cdots & \phi_{M-1}(\boldsymbol{x}_{N+1}) \\
  \phi_0(\boldsymbol{x}_{N+2}) & \cdots & \phi_{M-1}(\boldsymbol{x}_{N+2}) \\
  \vdots & \cdots & \vdots \\
  \phi_0(\boldsymbol{x}_{N+N_2}) & \cdots & \phi_{M-1}(\boldsymbol{x}_{N+N_2}) \\
  \end{pmatrix} .

この状況で、今度は :eq:`bayes8` を事前分布として、
パラメータ :math:`\boldsymbol{w}` の事後分布を考える

.. math::
    p(\boldsymbol{w} | \boldsymbol{X}_2, \boldsymbol{t}_2, \boldsymbol{X}, \boldsymbol{t})
    = \frac{
    p(\boldsymbol{t}_2 | \boldsymbol{X}_2, \boldsymbol{w})
    p(\boldsymbol{w} | \boldsymbol{X}, \boldsymbol{t})
    }{p(\boldsymbol{t}_2 | \boldsymbol{X}_2, \boldsymbol{X}, \boldsymbol{t})} .
    :label: bayes10

\ :math:`p(\boldsymbol{t}_2 | \boldsymbol{X}_2, \boldsymbol{w})` として再び :eq:`ml3` を用いるならば、
この事後分布の計算は、 :eq:`bayes8` を求めたときと全く同じになる。すなわち

.. math::
    \boldsymbol{S}_2^{-1}
    \equiv
    \boldsymbol{S}_1^{-1}
    +
    \beta \boldsymbol{\Phi}_2^\top \boldsymbol{\Phi}_2 ,
    :label: bayes11

.. math::
    \boldsymbol{m}_2
    \equiv
    \boldsymbol{S}_2
    \left(
    \boldsymbol{S}_1^{-1} \boldsymbol{m}_1
    + \beta \boldsymbol{\Phi}_2^\top \boldsymbol{t}_2
    \right) .
    :label: bayes12

を定義すれば、 :eq:`bayes10` は以下のように書ける

.. math::
    p(\boldsymbol{w} | \boldsymbol{X}_2, \boldsymbol{t}_2, \boldsymbol{X}, \boldsymbol{t})
    =
    \frac{1}{
    \sqrt{(2\pi)^{M} \left|\boldsymbol{S}_2\right|}
    }
    \exp{\left(
    -\frac{1}{2}
    (\boldsymbol{w}-\boldsymbol{m}_2)^\top
    \boldsymbol{S}_2^{-1}
    (\boldsymbol{w}-\boldsymbol{m}_2)
    \right)} .
    :label: bayes13

結局、常に\ :ref:`ガウス分布<gaussian_dist>`\ に戻るので、
明らかにこのプロセスは何度でも繰り返すことができる。

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
逐次学習とバッチ学習の等価性
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

今度は :math:`N+N_2` 個のデータが最初からあるという状況で、 :eq:`bayes1` 
の事前分布に戻ってパラメータ :math:`\boldsymbol{w}` の事後分布

.. math::
    p(\boldsymbol{w} | \boldsymbol{X}, \boldsymbol{X}_2, \boldsymbol{t}, \boldsymbol{t}_2)
    = \frac{
    p(\boldsymbol{t}, \boldsymbol{t}_2 | \boldsymbol{X}, \boldsymbol{X}_2, \boldsymbol{w})
    p(\boldsymbol{w})
    }{p(\boldsymbol{t}, \boldsymbol{t}_2 | \boldsymbol{X}, \boldsymbol{X}_2)}
    :label: bayes14

の計算を行う。\ :eq:`bayes6` および :eq:`bayes7` に対応する式は、

.. math::
    \tilde{\boldsymbol{S}}_1^{-1}
    \equiv
    \boldsymbol{S}_0^{-1}
    +
    \beta \boldsymbol{\Phi}^\top \boldsymbol{\Phi}
    +
    \beta \boldsymbol{\Phi}_2^\top \boldsymbol{\Phi}_2
    =
    \boldsymbol{S}_1^{-1}
    +
    \beta \boldsymbol{\Phi}_2^\top \boldsymbol{\Phi}_2
    =
    \boldsymbol{S}_2^{-1}
    :label: bayes6b

.. math::
    \tilde{\boldsymbol{m}}_1
    \equiv
    \tilde{\boldsymbol{S}}_1
    \left(
    \boldsymbol{S}_0^{-1} \boldsymbol{m}_0
    + \beta \boldsymbol{\Phi}^\top \boldsymbol{t}
    + \beta \boldsymbol{\Phi}_2^\top \boldsymbol{t}_2
    \right)
    =
    \boldsymbol{S}_2
    \left(
    \boldsymbol{S}_1^{-1} \boldsymbol{m}_1
    + \beta \boldsymbol{\Phi}_2^\top \boldsymbol{t}_2
    \right)
    =
    \boldsymbol{m}_2
    :label: bayes7b

となるので、事後分布は :eq:`bayes13` と全く同じものになることがわかる。このことは、
データを大量に用意して一度に学習させても（バッチ学習）、
小分けにして少しずつ学習させても（逐次学習）、結果は変わらないことを示している。
そこまでの学習の成果は次式に集約されることになる

.. math::
    p(\boldsymbol{w} | \boldsymbol{X}_N, \boldsymbol{t}_N)
    =
    \frac{1}{
    \sqrt{(2\pi)^{M} \left|\boldsymbol{S}_N\right|}
    }
    \exp{\left(
    -\frac{1}{2}
    (\boldsymbol{w}-\boldsymbol{m}_N)^\top
    \boldsymbol{S}_N^{-1}
    (\boldsymbol{w}-\boldsymbol{m}_N)
    \right)} .
    :label: bayes15

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
出力データの予測分布
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

パラメータの事前分布として式 :eq:`bayes15` が得られているという状況で、新たな入力 :math:`\boldsymbol{X}_{\rm new}`
に対する :math:`\boldsymbol{t}_{\rm new}` の予測分布を考える。これは次式で計算される

.. math::
    p(\boldsymbol{t}_{\rm new} | \boldsymbol{X}_{\rm new}, \boldsymbol{X}_N, \boldsymbol{t}_N)
    =
    \int p(\boldsymbol{t}_{\rm new} | \boldsymbol{X}_{\rm new}, \boldsymbol{w})
    p(\boldsymbol{w} |  \boldsymbol{X}_N, \boldsymbol{t}_N) d\boldsymbol{w} .
    :label: bayes16

上式の被積分関数は :eq:`bayes4` と同じ形

.. math::
    \exp{\left(
    -\frac{\beta}{2}
    \left( \boldsymbol{t}_{\rm new} - \boldsymbol{\Phi}_{\rm new}\boldsymbol{w} \right)^\top
    \left( \boldsymbol{t}_{\rm new} - \boldsymbol{\Phi}_{\rm new}\boldsymbol{w} \right)
    -\frac{1}{2}
    \left( \boldsymbol{w} - \boldsymbol{m}_N \right)^\top
    \boldsymbol{S}^{-1}_N
    \left( \boldsymbol{w} - \boldsymbol{m}_N \right)
    \right)}

であるが、今度は分子／分母で積分に関係しない項が打ち消しあうということは使えない。そこで、見通しよく計算を進めるために、
まず :math:`\boldsymbol{w}` と :math:`\boldsymbol{t}_{\rm new}` の同時分布を考える。上式の指数の中身を整理する

.. math::
    -\frac{1}{2}
    \left( \boldsymbol{w}^\top \;\; \boldsymbol{t}_{\rm new}^\top \right)
    \begin{pmatrix}
    \boldsymbol{S}_N^{-1} + \beta\boldsymbol{\Phi}_{\rm new}^\top\boldsymbol{\Phi}_{\rm new} &
    -\beta\boldsymbol{\Phi}_{\rm new}^\top \\
    -\beta\boldsymbol{\Phi}_{\rm new} &
    \beta\boldsymbol{I} \\
    \end{pmatrix}
    \begin{pmatrix}
    \boldsymbol{w} \\
    \boldsymbol{t}_{\rm new} \\
    \end{pmatrix}
    +\left( \boldsymbol{w}^\top \;\; \boldsymbol{t}_{\rm new}^\top \right)
    \begin{pmatrix}
    \boldsymbol{S}_N^{-1}\boldsymbol{m}_N \\
    \boldsymbol{0} \\
    \end{pmatrix}
    -\frac{1}{2}
    \boldsymbol{m}_N^\top\boldsymbol{S}_N^{-1}\boldsymbol{m}_N

.. math::
    = -\frac{1}{2}
    \left[
    \left( \boldsymbol{w}^\top \;\; \boldsymbol{t}_{\rm new}^\top \right)
    -\left( \boldsymbol{m}_N^\top\boldsymbol{S}_N^{-1} \;\; \boldsymbol{0} \right)
    \boldsymbol{R}^\top
    \right]
    \boldsymbol{R}^{-1}
    \left[
    \begin{pmatrix}
    \boldsymbol{w} \\
    \boldsymbol{t}_{\rm new} \\
    \end{pmatrix}
    -\boldsymbol{R}
    \begin{pmatrix}
    \boldsymbol{S}_N^{-1}\boldsymbol{m}_N \\
    \boldsymbol{0} \\
    \end{pmatrix}
    \right]
    +\frac{1}{2}
    \left( \boldsymbol{m}_N^\top\boldsymbol{S}_N^{-1} \;\; \boldsymbol{0} \right)
    \boldsymbol{R}
    \begin{pmatrix}
    \boldsymbol{S}_N^{-1}\boldsymbol{m}_N \\
    \boldsymbol{0} \\
    \end{pmatrix}
    -\frac{1}{2}
    \boldsymbol{m}_N^\top\boldsymbol{S}_N^{-1}\boldsymbol{m}_N .
    :label: bayes18

ここで、

.. math::
    \boldsymbol{R}^{-1}
    \equiv
    \begin{pmatrix}
    \boldsymbol{S}_N^{-1} + \beta\boldsymbol{\Phi}_{\rm new}^\top\boldsymbol{\Phi}_{\rm new} &
    -\beta\boldsymbol{\Phi}_{\rm new}^\top \\
    -\beta\boldsymbol{\Phi}_{\rm new} &
    \beta\boldsymbol{I} \\
    \end{pmatrix}
    :label: bayes19

とおいた。\ :math:`\boldsymbol{R}` は\ :ref:`ブロック行列の逆行列の公式<matform_block>`\ より

.. math::
    \boldsymbol{R}
    =
    \begin{pmatrix}
    \boldsymbol{S}_N &
    \boldsymbol{S}_N \boldsymbol{\Phi}_{\rm new}^\top \\
    \boldsymbol{\Phi}_{\rm new} \boldsymbol{S}_N &
    \beta^{-1}\boldsymbol{I} + \boldsymbol{\Phi}_{\rm new}\boldsymbol{S}_N\boldsymbol{\Phi}^\top_{\rm new} \\
    \end{pmatrix}
    :label: bayes20

となる。これから、

.. math::
    \boldsymbol{R}
    \begin{pmatrix}
    \boldsymbol{S}_N^{-1}\boldsymbol{m}_N \\
    \boldsymbol{0} \\
    \end{pmatrix}
    =
    \begin{pmatrix}
    \boldsymbol{m}_N \\
    \boldsymbol{\Phi}_{\rm new}\boldsymbol{m}_N \\
    \end{pmatrix}
    :label: bayes21

と計算されるので、 :eq:`bayes18` は、右辺第2項と第3項が打ち消し合い、最終的に次のようになる

.. math::
    -\frac{1}{2}
    \begin{pmatrix}
    \boldsymbol{w}^\top - \boldsymbol{m}_N^\top &
    \boldsymbol{t}_{\rm new}^\top - \boldsymbol{m}_N^\top\boldsymbol{\Phi}_{\rm new}^\top \\
    \end{pmatrix}
    \boldsymbol{R}^{-1}
    \begin{pmatrix}
    \boldsymbol{w} - \boldsymbol{m}_N \\
    \boldsymbol{t}_{\rm new} - \boldsymbol{\Phi}_{\rm new}\boldsymbol{m}_N \\
    \end{pmatrix} \\

.. math::
    =
    -\frac{1}{2}
    \left( \boldsymbol{w} - \boldsymbol{m}_N - \boldsymbol{S}_{N+1}\boldsymbol{m}^{\prime}_{N+1} \right)^\top
    \boldsymbol{S}^{-1}_{N+1}
    \left( \boldsymbol{w} - \boldsymbol{m}_N - \boldsymbol{S}_{N+1}\boldsymbol{m}^{\prime}_{N+1} \right)
    -\frac{1}{2}
    \left( \boldsymbol{t}_{\rm new} - \boldsymbol{\Phi}_{\rm new}\boldsymbol{m}_N \right)^\top
    \boldsymbol{A}_{N+1}^{-1}
    \left( \boldsymbol{t}_{\rm new} - \boldsymbol{\Phi}_{\rm new}\boldsymbol{m}_N \right)
    :label: bayes22

.. math::
    =
    -\frac{1}{2}
    \left( \boldsymbol{w} - \boldsymbol{m}_{N+1} \right)^\top
    \boldsymbol{S}^{-1}_{N+1}
    \left( \boldsymbol{w} - \boldsymbol{m}_{N+1} \right)
    -\frac{1}{2}
    \left( \boldsymbol{t}_{\rm new} - \boldsymbol{\Phi}_{\rm new}\boldsymbol{m}_N \right)^\top
    \boldsymbol{A}_{N+1}^{-1}
    \left( \boldsymbol{t}_{\rm new} - \boldsymbol{\Phi}_{\rm new}\boldsymbol{m}_N \right)

ここで

.. math::
    \boldsymbol{S}_{N+1}^{-1}
    \equiv
    \boldsymbol{S}_N^{-1} + \beta\boldsymbol{\Phi}_{\rm new}^\top\boldsymbol{\Phi}_{\rm new} ,
    :label: bayes23

.. math::
    \boldsymbol{A}_{N+1}^{-1}
    \equiv
    \beta\boldsymbol{I} - \beta^2\boldsymbol{\Phi}_{\rm new}  \boldsymbol{S}_{N+1} \boldsymbol{\Phi}^\top_{\rm new} ,
    :label: bayes24

.. math::
    \boldsymbol{m}^{\prime}_{N+1}
    \equiv
    \beta\boldsymbol{\Phi}_{\rm new}^\top
    \left(
    \boldsymbol{t}_{\rm new} - \boldsymbol{\Phi}_{\rm new} \boldsymbol{m}_{N}
    \right) ,
    :label: bayes25

.. math::
    \boldsymbol{m}_{N+1}
    \equiv
    \boldsymbol{S}_{N+1}
    \left(
    \boldsymbol{S}_N^{-1} \boldsymbol{m}_N
    + \beta \boldsymbol{\Phi}^\top_{\rm new} \boldsymbol{t}_{\rm new}
    \right) ,
    :label: bayes26

とおいた。式 :eq:`bayes22` の最後の等式は、\ :ref:`matform1`\ を用いて導ける。
\ :eq:`bayes16` に戻って、 :math:`\boldsymbol{w}` についての\ :ref:`ガウス積分<gaussian_intg>`\ を実行すると

.. math::
    \int d\boldsymbol{w}
    \exp{\left(
    -\frac{1}{2}
    \left( \boldsymbol{w} - \boldsymbol{m}_{N+1} \right)^\top
    \boldsymbol{S}^{-1}_{N+1}
    \left( \boldsymbol{w} - \boldsymbol{m}_{N+1} \right)
    \right)}
    =
    \sqrt{ \left( 2\pi \right)^M \left| \boldsymbol{S}_{N+1} \right| }

なので、

.. math::
    p(\boldsymbol{t}_{\rm new} | \boldsymbol{X}_{\rm new}, \boldsymbol{X}_N, \boldsymbol{t}_N)
    =
    \frac{\sqrt{(2\pi)^M\left| \boldsymbol{S}_{N+1} \right|}}
    {\sqrt{(2\pi)^N\beta^{-N}} \sqrt{(2\pi)^M\left| \boldsymbol{S}_N \right|}}
    \exp{\left(
    -\frac{1}{2}
    \left( \boldsymbol{t}_{\rm new} - \boldsymbol{\Phi}_{\rm new}\boldsymbol{m}_N \right)^\top
    \boldsymbol{A}_{N+1}^{-1}
    \left( \boldsymbol{t}_{\rm new} - \boldsymbol{\Phi}_{\rm new}\boldsymbol{m}_N \right)
    \right)}

となるが、\ :ref:`行列式の公式<matform_blockdet>`\ を用いて係数を整理すると、
最終的に出力データの予測分布は以下のようになる

.. math::
    p(\boldsymbol{t}_{\rm new} | \boldsymbol{X}_{\rm new}, \boldsymbol{X}_N, \boldsymbol{t}_N)
    =
    \frac{1}{\sqrt{(2\pi)^N \left| \boldsymbol{A}_{N+1} \right|}}
    \exp{\left(
    -\frac{1}{2}
    \left( \boldsymbol{t}_{\rm new} - \boldsymbol{\Phi}_{\rm new}\boldsymbol{m}_N \right)^\top
    \boldsymbol{A}^{-1}_{N+1}
    \left( \boldsymbol{t}_{\rm new} - \boldsymbol{\Phi}_{\rm new}\boldsymbol{m}_N \right)
    \right)} .
    :label: bayes30
