.. _gaussian_process:

------------------------------------
ガウス過程回帰
------------------------------------

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
動機付け
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

式 :eq:`pgp6` において、データ数とパラメータ数が等しい、すなわち :math:`\boldsymbol{\Phi}`
が正方行列となるケースを考える

.. math::
  \boldsymbol{y}
  \equiv
  \begin{pmatrix}
  y_1 \\
  y_2 \\
  \vdots \\
  y_N
  \end{pmatrix}
  =
  \begin{pmatrix}
  \phi_0(\boldsymbol{x}_1) & \phi_1(\boldsymbol{x}_1) & \cdots & \phi_{N-1}(\boldsymbol{x}_1) \\
  \phi_0(\boldsymbol{x}_2) & \phi_1(\boldsymbol{x}_2) & \cdots & \phi_{N-1}(\boldsymbol{x}_2) \\
  \vdots & \cdots & \cdots & \vdots \\
  \phi_0(\boldsymbol{x}_N) & \phi_1(\boldsymbol{x}_N) & \cdots & \phi_{N-1}(\boldsymbol{x}_N) \\
  \end{pmatrix}
  \begin{pmatrix}
  w_0 \\
  w_1 \\
  \vdots \\
  w_{N-1}
  \end{pmatrix}
  \equiv
  \boldsymbol{\Phi}\boldsymbol{w} .
  :label: gp1

さらに :math:`\boldsymbol{\Phi}` が正則であるとして、上式を :math:`\boldsymbol{w}` について解く

.. math::
  \boldsymbol{w}
  = \boldsymbol{\Phi}^{-1} \boldsymbol{y} .
  :label: gp2

パラメータ :math:`\boldsymbol{w}` に対する事前分布として

.. math::
    p(\boldsymbol{w})
    \propto
    \exp{\left(-\frac{\beta}{2}\boldsymbol{w}^\top\boldsymbol{w}\right)}
    :label: gp3

を考え、ここに式 :eq:`gp2` を代入すると次式が得られる

.. math::
    \exp{\left(-\frac{\beta}{2}\boldsymbol{w}^\top\boldsymbol{w}\right)}
    =
    \exp{\left(-\frac{\beta}{2}\boldsymbol{y}^\top\boldsymbol{\Phi}^{-\top}\boldsymbol{\Phi}^{-1}\boldsymbol{y}\right)}
    =
    \exp{\left(-\frac{\beta}{2}\boldsymbol{y}^\top
    \left(\boldsymbol{\Phi}\boldsymbol{\Phi}^\top\right)^{-1}\boldsymbol{y}\right)} .
    :label: gp4

上式はパラメータ :math:`\boldsymbol{w}` が消去され、代わりに :math:`\boldsymbol{y}`
に対する事前分布を与えた式となっている。式 :eq:`gp1` から

.. math::
  \boldsymbol{\Phi}\boldsymbol{\Phi}^\top
  =
  \begin{pmatrix}
  \phi_0(\boldsymbol{x}_1) & \phi_1(\boldsymbol{x}_1) & \cdots & \phi_{N-1}(\boldsymbol{x}_1) \\
  \phi_0(\boldsymbol{x}_2) & \phi_1(\boldsymbol{x}_2) & \cdots & \phi_{N-1}(\boldsymbol{x}_2) \\
  \vdots & \cdots & \cdots & \vdots \\
  \phi_0(\boldsymbol{x}_N) & \phi_1(\boldsymbol{x}_N) & \cdots & \phi_{N-1}(\boldsymbol{x}_N) \\
  \end{pmatrix}
  \begin{pmatrix}
  \phi_0(\boldsymbol{x}_1) & \phi_0(\boldsymbol{x}_2) & \cdots & \phi_0(\boldsymbol{x}_N) \\
  \phi_1(\boldsymbol{x}_1) & \phi_1(\boldsymbol{x}_2) & \cdots & \phi_1(\boldsymbol{x}_N) \\
  \vdots & \cdots & \cdots & \vdots \\
  \phi_{N-1}(\boldsymbol{x}_1) & \phi_{N-1}(\boldsymbol{x}_2) & \cdots & \phi_{N-1}(\boldsymbol{x}_N) \\
  \end{pmatrix}
  :label: gpmp

であり、

.. math::
  k(\boldsymbol{x}_i, \boldsymbol{x}_j)
  \equiv
  \sum_{n=0}^{N-1} \phi_n(\boldsymbol{x}_i) \phi_n(\boldsymbol{x}_j)
  :label: gp_k

という関数を定義して、これを要素とする行列を

.. math::
  \boldsymbol{K}
  \equiv
  \begin{pmatrix}
  k(\boldsymbol{x}_1, \boldsymbol{x}_1) & k(\boldsymbol{x}_1, \boldsymbol{x}_2) & \cdots & k(\boldsymbol{x}_1, \boldsymbol{x}_N) \\
  k(\boldsymbol{x}_2, \boldsymbol{x}_1) & k(\boldsymbol{x}_2, \boldsymbol{x}_2) & \cdots & k(\boldsymbol{x}_2, \boldsymbol{x}_N) \\
  \vdots & \cdots & \cdots & \vdots \\
  k(\boldsymbol{x}_N, \boldsymbol{x}_1) & k(\boldsymbol{x}_N, \boldsymbol{x}_2) & \cdots & k(\boldsymbol{x}_N, \boldsymbol{x}_N) \\
  \end{pmatrix}
  :label: gp_kmat

と置くと、\ :math:`\boldsymbol{y}` の事前分布は次のように書ける

.. math::
  p(\boldsymbol{y})
  =
  \frac{1}{\sqrt{(2\pi)^N\left| K \right|}}
  \exp{\left(
  -\frac{1}{2}
  \boldsymbol{y}^\top \boldsymbol{K}^{-1} \boldsymbol{y}
  \right)} .
  :label: gp5

以上より、パラメータ\ :math:`\boldsymbol{w}` を経由することなく、
\ :math:`\boldsymbol{y}` についての確率分布を直接的に扱う定式化の可能性が示唆される。\
そうすることで、基底関数やパラメータの数の増大で計算が困難になる、いわゆる「次元の呪い」からの解放される事になる。

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
ガウス過程との関係
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

いま、多数の（あるいは連続的な）データから、任意に :math:`N` 個のデータを取り出すことを考える

.. math::
    \{y_1, y_2, \dots, y_N\} .
  :label: gp_ndat

この\ :math:`N` 個のデータの同時分布が、式 :eq:`gp5` のような多変量ガウス分布であるとき、\
これは「ガウス過程」と呼ばれる確率過程の定義そのものになっている。\
もちろん今はデータのラベルに時間の意味はないが、この対応から、式 :eq:`gp5`
の確率分布を利用した回帰は「ガウス過程回帰」と呼ばれる。


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
出力にノイズがある場合
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

出力データにノイズがあり、次のような形でデータが生成される場合を考える

.. math::
  \boldsymbol{t} = \boldsymbol{y} + \boldsymbol{\varepsilon} .
  :label: gp_t

\ :math:`\boldsymbol{y}` が与えられた時の :math:`\boldsymbol{t}` の分布を

.. math::
  p(\boldsymbol{t} | \boldsymbol{y})
  =
  \frac{1}{\sqrt{(2\pi)^N(\sigma_\varepsilon^2)^N}}
  \exp{\left(
  -\frac{1}{2\sigma_\varepsilon^2}
  (\boldsymbol{t}-\boldsymbol{y})^\top (\boldsymbol{t}-\boldsymbol{y})
  \right)}
  :label: gp6

でモデル化するとき、\ :math:`\boldsymbol{t}` の周辺分布は

.. math::
  p(\boldsymbol{t})
  =
  \int
  p(\boldsymbol{t} | \boldsymbol{y})
  p(\boldsymbol{y})
  d\boldsymbol{y}
  :label: gp_merge

と計算される。これを :eq:`gp5` および :eq:`gp6` を用いて計算すると

.. math::
  p(\boldsymbol{t})
  =
  \frac{1}{\sqrt{(2\pi)^N\left| \boldsymbol{K} + \beta^{-1}\boldsymbol{I} \right|}}
  \exp{\left(
  -\frac{1}{2}
  \boldsymbol{t}^\top
  \left( \boldsymbol{K} + \beta^{-1}\boldsymbol{I} \right)^{-1}
  \boldsymbol{t}
  \right)}
  :label: gp_pt

が得られる。これは、共分散行列を

.. math::
  \boldsymbol{K} \longrightarrow \boldsymbol{K} + \beta^{-1}\boldsymbol{I}
  :label: gp_kmat2

と置き換えれば :eq:`gp5` と本質的には同じものであることがわかる。

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
予測分布
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

いま、\ :math:`N_1` 個の入出力データのセットがあるとして、新たな :math:`N` 個の入力と対応する出力を

.. math::
  \boldsymbol{X}
  &\equiv
  \{\boldsymbol{x}_{1}, \boldsymbol{x}_{2}, \dots, \boldsymbol{x}_{N}\} ,\\\\
  \boldsymbol{t}
  &\equiv
  \{t_{1}, t_{2}, \dots, t_{N}\}
  :label: gp_x

と表し、入出力がそろっている :math:`N_1` 個の（既知の）データを

.. math::
  \boldsymbol{X}_{N_1}
  &\equiv
  \{\boldsymbol{x}_{N+1}, \boldsymbol{x}_{N+2}, \dots, \boldsymbol{x}_{N+N_1}\} ,\\\\
  \boldsymbol{t}_{N_1}
  &\equiv
  \{t_{N+1}, t_{N+2}, \dots, t_{N+N_1}\} \\
  :label: gp_t1

と表すことにする。関数 :math:`k(\boldsymbol{x}, \boldsymbol{x}')` の形も与えられているとして、
共分散行列をブロック行列の形で以下のように定義する

.. math::
  \begin{pmatrix}
  \boldsymbol{K}_{NN} & \boldsymbol{K}_{NN_1} \\
  \boldsymbol{K}_{N_1N} & \boldsymbol{K}_{N_1N_1} \\
  \end{pmatrix}
  \equiv
  \begin{pmatrix}
  k(\boldsymbol{x}_1, \boldsymbol{x}_1) & \cdots & k(\boldsymbol{x}_1, \boldsymbol{x}_{N}) & \cdots & k(\boldsymbol{x}_1, \boldsymbol{x}_{N+N_1}) \\
  \vdots & \vdots & \vdots & \vdots & \vdots \\
  k(\boldsymbol{x}_N, \boldsymbol{x}_1) & \cdots & k(\boldsymbol{x}_N, \boldsymbol{x}_{N}) & \cdots & k(\boldsymbol{x}_N, \boldsymbol{x}_{N+N_1}) \\
  \vdots & \vdots & \vdots & \vdots & \vdots \\
  k(\boldsymbol{x}_{N+N_1}, \boldsymbol{x}_1) & \cdots & k(\boldsymbol{x}_{N+N_1}, \boldsymbol{x}_N) & \cdots & k(\boldsymbol{x}_{N+N_1}, \boldsymbol{x}_{N+N_1}) \\
  \end{pmatrix} .
  :label: gp_kblock

ここで :math:`\boldsymbol{t}` と :math:`\boldsymbol{t_{N_1}}` の同時分布を考える。指数部の中身だけ書き出すと

.. math::
  -\frac{1}{2}
  \left(
  \boldsymbol{t}^\top \;\;
  \boldsymbol{t}_{N_1}^\top
  \right)
  \begin{pmatrix}
  \boldsymbol{K}_{N N} & \boldsymbol{K}_{N N_1} \\
  \boldsymbol{K}_{N_1 N} & \boldsymbol{K}_{N_1 N_1} \\
  \end{pmatrix}^{-1}
  \begin{pmatrix}
  \boldsymbol{t} \\
  \boldsymbol{t}_{N_1} \\
  \end{pmatrix}
  \equiv
  -\frac{1}{2}
  \left(
  \boldsymbol{t}^\top \;\;
  \boldsymbol{t}_{N_1}^\top
  \right)
  \begin{pmatrix}
  \boldsymbol{L}_{N N} & \boldsymbol{L}_{N N_1} \\
  \boldsymbol{L}_{N_1 N} & \boldsymbol{L}_{N_1 N_1} \\
  \end{pmatrix}
  \begin{pmatrix}
  \boldsymbol{t} \\
  \boldsymbol{t}_{N_1} \\
  \end{pmatrix} .
  :label: gp_exp1

ここで、共分散行列の逆行列（精度行列）の各ブロックは、\ :ref:`ブロック行列の逆行列の公式<matform_block>`\ を用いれば次のようになる
  
.. math::
  \boldsymbol{L}_{NN}
  &=
  \left(
    \boldsymbol{K}_{NN}
   -\boldsymbol{K}_{NN_1} \boldsymbol{K}^{-1}_{N_1N_1} \boldsymbol{K}_{N_1N}
  \right)^{-1} ,\\\\
  \boldsymbol{L}_{NN_1}
  &=
  -\left(
    \boldsymbol{K}_{NN}
    -\boldsymbol{K}_{NN_1} \boldsymbol{K}^{-1}_{N_1N_1} \boldsymbol{K}_{N_1N}
  \right)^{-1}
  \boldsymbol{K}_{NN_1} \boldsymbol{K}^{-1}_{N_1N_1} ,\\\\
  \boldsymbol{L}_{N_1N}
  &=
  -\boldsymbol{K}^{-1}_{N_1N_1} \boldsymbol{K}_{N_1N}
  \left(
    \boldsymbol{K}_{NN}
    -\boldsymbol{K}_{NN_1} \boldsymbol{K}^{-1}_{N_1N_1} \boldsymbol{K}_{N_1N}
  \right)^{-1} ,\\\\
  \boldsymbol{L}_{N_1N_1}
  &=
  \boldsymbol{K}^{-1}_{N_1N_1}
  -
  \boldsymbol{K}^{-1}_{N_1N_1}
  \boldsymbol{K}_{N_1N}
  \left(
    \boldsymbol{K}_{NN}
   -\boldsymbol{K}_{NN_1} \boldsymbol{K}^{-1}_{N_1N_1} \boldsymbol{K}_{N_1N}
  \right)^{-1}
  \boldsymbol{K}_{NN_1}
  \boldsymbol{K}^{-1}_{N_1N_1}

となる。これらを用いて :eq:`gp_exp1` は次のように書ける

.. math::
  -\frac{1}{2}
  \left(
  \boldsymbol{t}^\top \;\;
  \boldsymbol{t}_{N_1}^\top
  \right)
  \begin{pmatrix}
  \boldsymbol{L}_{N N} & \boldsymbol{L}_{N N_1} \\
  \boldsymbol{L}_{N_1 N} & \boldsymbol{L}_{N_1 N_1} \\
  \end{pmatrix}
  \begin{pmatrix}
  \boldsymbol{t} \\
  \boldsymbol{t}_{N_1} \\
  \end{pmatrix}
  &=
  -\frac{1}{2}
  \left(
  \boldsymbol{t}^\top \boldsymbol{L}_{NN} \boldsymbol{t}
  + \boldsymbol{t}^\top \boldsymbol{L}_{NN_1} \boldsymbol{t}_{N_1}
  + \boldsymbol{t}_{N_1}^\top \boldsymbol{L}_{N_1N} \boldsymbol{t}
  + \boldsymbol{t}_{N_1}^\top \boldsymbol{L}_{N_1N_1} \boldsymbol{t}_{N_1}
  \right) \\
  &=
  -\frac{1}{2}
  \left(
  \boldsymbol{t}^\top + \boldsymbol{t}_{N_1}^\top \boldsymbol{L}_{N_1N} \boldsymbol{L}^{-1}_{NN}
  \right)
  \boldsymbol{L}_{NN}
  \left(
  \boldsymbol{t} + \boldsymbol{L}^{-1}_{NN} \boldsymbol{L}_{NN_1} \boldsymbol{t}_{N_1} 
  \right)
  -\frac{1}{2}
  \boldsymbol{t}_{N_1}^\top
  \left(  
  \boldsymbol{L}_{N_1N_1} - \boldsymbol{L}_{N_1N} \boldsymbol{L}^{-1}_{NN} \boldsymbol{L}_{NN_1}
  \right)
  \boldsymbol{t}_{N_1} .

:math:`\boldsymbol{K}` に戻して式を整理する

.. math::
  \boldsymbol{L}_{N_1N} \boldsymbol{L}^{-1}_{NN}
  &=
  -\boldsymbol{K}^{-1}_{N_1N_1} \boldsymbol{K}_{N_1N} ,\\
  \\
  \boldsymbol{L}^{-1}_{NN} \boldsymbol{L}_{NN_1}
  &=
  \left( \boldsymbol{L}_{N_1N} \boldsymbol{L}^{-1}_{NN} \right)^\top
  =
  -\boldsymbol{K}_{NN_1} \boldsymbol{K}^{-1}_{N_1N_1} ,\\
  \\
  \boldsymbol{L}_{N_1N_1} - \boldsymbol{L}_{N_1N} \boldsymbol{L}^{-1}_{NN} \boldsymbol{L}_{NN_1}
  &=
  \boldsymbol{K}^{-1}_{N_1N_1} .\\

以上をまとめると

.. math::
  -\frac{1}{2}
  \left(
  \boldsymbol{t}^\top \;\;
  \boldsymbol{t}_{N_1}^\top
  \right)
  \begin{pmatrix}
  \boldsymbol{L}_{N N} & \boldsymbol{L}_{N N_1} \\
  \boldsymbol{L}_{N_1 N} & \boldsymbol{L}_{N_1 N_1} \\
  \end{pmatrix}
  \begin{pmatrix}
  \boldsymbol{t}\\
  \boldsymbol{t}_{N_1}\\
  \end{pmatrix}
  &=
  -\frac{1}{2}
  \left(
  \boldsymbol{t}^\top - \boldsymbol{t}_{N_1}^\top \boldsymbol{K}^{-1}_{N_1N_1} \boldsymbol{K}_{N_1N}
  \right)
  \boldsymbol{L}_{NN}
  \left(
  \boldsymbol{t} -\boldsymbol{K}_{NN_1} \boldsymbol{K}^{-1}_{N_1N_1} \boldsymbol{t}_{N_1} 
  \right)
  -\frac{1}{2}
  \boldsymbol{t}_{N_1}^\top
  \boldsymbol{K}^{-1}_{N_1N_1}
  \boldsymbol{t}_{N_1}
  :label: gp_merge2

となる。確率の同時分布と条件付き分布の関係式

.. math::
  p(\boldsymbol{t}, \boldsymbol{t}_{N_1})
  =
  p(\boldsymbol{t} | \boldsymbol{t}_{N_1}) p(\boldsymbol{t}_{N_1})
  :label: gp_merge_cond

より、

.. math::
  p(\boldsymbol{t} | \boldsymbol{t}_{N_1})
  \propto
  \exp{
  \left(
    -\frac{1}{2}
    \left(
    \boldsymbol{t}^\top - \boldsymbol{t}_{N_1}^\top \boldsymbol{K}^{-1}_{N_1N_1} \boldsymbol{K}_{N_1N}
    \right)
    \boldsymbol{L}_{NN}
    \left(
    \boldsymbol{t} -\boldsymbol{K}_{NN_1} \boldsymbol{K}^{-1}_{N_1N_1} \boldsymbol{t}_{N_1} 
    \right)
  \right)
  }
  :label: gp_t_t1

が得られ、これが求めようとしていた :math:`\boldsymbol{t}_{N_1}` が既知である状況での、\ :math:`\boldsymbol{t}`
の条件付き確率分布となる。

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
予測関数
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

式 :eq:`gp_t_t1` より、平均

.. math::
  \boldsymbol{m}
  \equiv
  \boldsymbol{K}_{NN_1} \boldsymbol{K}^{-1}_{N_1N_1} \boldsymbol{t}_{N_1}
  :label: gp_ave

が、\ :eq:`gp_x` の入力に対する出力の予測となり、\ :eq:`gp_t_t1` は、その誤差を与える事になる。\
式 :eq:`gp_ave` を書き下すと次のようになる

.. math::
  \begin{pmatrix}
  m(\boldsymbol{x}_{1}) \\
  m(\boldsymbol{x}_{2}) \\
  \vdots \\
  m(\boldsymbol{x}_{N}) \\
  \end{pmatrix}
  =
  \begin{pmatrix}
  \sum_{i=N+1}^{N+N_1} \sum_{j=N+1}^{N+N_1}
  k(\boldsymbol{x}_{1}, \boldsymbol{x}_i) k^{-1}(\boldsymbol{x}_i, \boldsymbol{x}_j) t(\boldsymbol{x}_j) \\
  \sum_{i=N+1}^{N+N_1} \sum_{j=N+1}^{N+N_1}
  k(\boldsymbol{x}_{2}, \boldsymbol{x}_i) k^{-1}(\boldsymbol{x}_i, \boldsymbol{x}_j) t(\boldsymbol{x}_j) \\
  \vdots \\
  \sum_{i=N+1}^{N+N_1} \sum_{j=N+1}^{N+N_1}
  k(\boldsymbol{x}_{N}, \boldsymbol{x}_i) k^{-1}(\boldsymbol{x}_i, \boldsymbol{x}_j) t(\boldsymbol{x}_j) 
  \end{pmatrix}
  :label: gp_ave_mat

となる。これは「平均」として得られる関数の予測が

.. math::
  m(\boldsymbol{x}) = \sum_{i=1}^{N_1} c_i k(\boldsymbol{x}, \boldsymbol{x}_i)
  :label: gp_m

という形で表せることを示している。ここで

.. math::
    c_i
    \equiv
    \sum_{j=1}^{N_1} k^{-1}(\boldsymbol{x}_i, \boldsymbol{x}_j) t(\boldsymbol{x}_j)
    :label: gp_c

とおき、また既知データの添え字を :math:`1, 2, \dots, N_1` と振り直した。\
式 :eq:`gp_m` は「\ :ref:`再生核ヒルベルト空間<rkhs>`\ 」というものと密接な関係がある。
詳細は\ :ref:`ヒルベルト空間<hilbert>`\ の項に譲り、ここでは主要な結果を列挙するだけにとどめる。


.. admonition:: 再生核（定義）

  関数 :math:`f(x)` と、ヒルベルト空間の要素としての :math:`f`
  をあまり区別せず、おおらかに定義を述べると、

  .. math::
    \int k(x,x') f(x') dx' = f(x)

  となるような関数 :math:`k(x,x')` を「再生核」と呼ぶ。


.. admonition:: ムーア・アロンシャインの定理

  正定値対称な関数 :math:`k(x,x')` があれば、これに付随するヒルベルト空間（再生核ヒルベルト空間）が一意に定まる


.. admonition:: Representer定理

  次のような正則化項付きの損失関数を考える

  .. math::
    L
    =
    E\left[ (x_1, y_1, f(x_1)), (x_2, y_2, f(x_2)), \dots, (x_N, y_N, f(x_N)) \right]
    +
    \Phi(\|f\|^2) ,
  
  ここで正則化項 :math:`\Phi` は単調増加関数であるとする。このとき、上式を最小化する :math:`f(x)` は、次の形に書ける

  .. math::
    f(x) = \sum_{i=1}^N c_i k(x, x_i) .

