.. _irreducible-kpoints:

既約k点と結晶の対称性
======================

結晶の電子状態計算では、まずブリルアンゾーン（BZ）の多数のk点での計算を行い、最後にそれらの和をとって最終的な物理量を求める。
結晶の対称性を使うと、同じ情報を持つ点をまとめ、代表点だけで計算できる。
本稿ではブロッホ関数の変換からその理由を導き、代表点の重みを説明する。

**前提知識**: :ref:`ブロッホの定理<blochstheorem>`、
:ref:`ブリルアンゾーン<brillouinzone>`、:ref:`k点サンプリング<kpoint_sampling>`。

**学習目標**:

* 結晶の対称操作が波数とエネルギーに及ぼす関係を導く。
* 既約k点の重みが元のメッシュの和を再現することと、その条件を説明する。

結晶の対称操作
--------------

結晶の原子配置を保つ回転、鏡映、反転操作を :math:`Q` とし、並進操作を :math:`\boldsymbol t` とする。まとめて

.. math::
   :label: ikp-operation

   g=\{Q\mid\boldsymbol t\}

と表すことにする。位置 :math:`\boldsymbol r` にこれを作用させると、位置 :math:`\boldsymbol r'` に移るという場合

.. math::
   :label: ikp-operation-2

   \boldsymbol r' = g\boldsymbol r=Q\boldsymbol r+\boldsymbol t,\qquad
   g^{-1}\boldsymbol r' = \boldsymbol r = Q^{-1}(\boldsymbol r'-\boldsymbol t)

となる。Cartesian座標で :math:`Q` は直交行列、 :math:`\boldsymbol t` はベクトルである。
対称操作の直交部分の集まりは結晶の点群をなす。以下では、原子配置だけでなく、
電子のハミルトニアンも不変に保つ操作を考える。

ブロッホ関数の変換
------------------

スピンを明示しないスカラー波動関数を考える。波数 :math:`\boldsymbol k` の
ブロッホ関数は任意の格子並進 :math:`\boldsymbol L` に対して

.. math::
   :label: ikp-bloch

   \psi_{\boldsymbol k}(\boldsymbol r+\boldsymbol L)
   =e^{i\boldsymbol k\cdot\boldsymbol L}\psi_{\boldsymbol k}(\boldsymbol r)

を満たす。 :eq:`ikp-operation` に対応する関数の変換を考える。関数と位置を同時に変換すると、それは元と何も変わらないので、

.. math::
   :label: ikp-transform

   (U_g\psi_{\boldsymbol k})(g\boldsymbol r)
   =\psi_{\boldsymbol k}(\boldsymbol r)

となる（\ :math:`U_g` は変換に対応した演算子とする）。ここから

.. math::
   :label: ikp-transform-2

   (U_g\psi_{\boldsymbol k})(\boldsymbol r)
   =\psi_{\boldsymbol k}(g^{-1}\boldsymbol r)
   =\psi_{\boldsymbol k}\!\left(Q^{-1}(\boldsymbol r-\boldsymbol t)\right)

が導かれ、これで演算子 :math:`U_g` の作用が具体的に書き下せた事になる。

:math:`g` で移した結晶は元の結晶と同じなので、格子並進も格子並進に移り、
:math:`Q\boldsymbol L` と :math:`Q^{-1}\boldsymbol L` も格子並進である。
:eq:`ikp-bloch` を :math:`Q^{-1}\boldsymbol L` に使い、 :math:`Q` の直交性
（:math:`Q^{-1}=Q^{\mathsf T}`\ ）から :math:`\boldsymbol k\cdot Q^{-1}\boldsymbol L=(Q\boldsymbol k)\cdot\boldsymbol L`
とすると

.. math::
   :label: ikp-derived

   \begin{aligned}
   (U_g\psi_{\boldsymbol k})(\boldsymbol r+\boldsymbol L)
   &=\psi_{\boldsymbol k}\!\left(Q^{-1}(\boldsymbol r-\boldsymbol t)+Q^{-1}\boldsymbol L\right)\\
   &=e^{i\boldsymbol k\cdot Q^{-1}\boldsymbol L}(U_g\psi_{\boldsymbol k})(\boldsymbol r)\\
   &=e^{i(Q\boldsymbol k)\cdot\boldsymbol L}(U_g\psi_{\boldsymbol k})(\boldsymbol r).
   \end{aligned}

したがって :math:`U_g\psi_{\boldsymbol k}` は波数 :math:`Q\boldsymbol k` のブロッホ条件を満たす。
逆格子ベクトル :math:`\boldsymbol G` に対して :math:`e^{i\boldsymbol G\cdot\boldsymbol L}=1` なので、
:math:`\boldsymbol G` だけ違う波数は同じブロッホ条件を与える。変換後の波数を
:math:`\boldsymbol k'` と書けば

.. math::
   :label: ikp-kmap

   \boldsymbol k'\equiv Q\boldsymbol k\pmod{\boldsymbol G}

である。並進部分 :math:`\boldsymbol t` は波数の行先には現れないが、波動関数の形や位相には影響する。

:math:`Q` はCartesian座標の行列である。格子行列 :math:`A` と逆格子行列
:math:`B=2\pi A^{-\mathsf T}`\ （:ref:`lattice`\ ）を使い、実格子の分率座標で同じ操作を
:math:`W=A^{-1}QA` と表すと、逆格子の分率座標では
:math:`B^{-1}QB=A^{\mathsf T}QA^{-\mathsf T}=(W^{-1})^{\mathsf T}` となる。最後の等号には
:math:`Q^{-\mathsf T}=Q` を使った。一般には :math:`W` をそのままk点の分率座標に掛けられない。

エネルギーの等価性
------------------

ハミルトニアン :math:`H` がこの操作を保つとき、 :math:`HU_g=U_gH` である。
:math:`H\psi_{\boldsymbol k}=\varepsilon\psi_{\boldsymbol k}` なら

.. math::
   :label: ikp-energy

   H(U_g\psi_{\boldsymbol k})=U_gH\psi_{\boldsymbol k}
   =\varepsilon(U_g\psi_{\boldsymbol k})

なので、 :math:`U_g\psi_{\boldsymbol k}` は :math:`Q\boldsymbol k` の同じエネルギーの固有状態である。
:math:`U_g` は1次独立な状態を1次独立な状態に移し、逆操作 :math:`g^{-1}` で戻せるので、
:math:`\boldsymbol k` と :math:`Q\boldsymbol k` のエネルギー固有値の集合は縮退度を含めて等しい。
各k点でバンドをエネルギーの低い順に番号付けると

.. math::
   :label: ikp-bands

   \varepsilon_n(Q\boldsymbol k)=\varepsilon_n(\boldsymbol k)\qquad(n=1,2,\ldots)

である。ただし、変換後の状態が、 :math:`Q\boldsymbol k` であらかじめ選んだ固有関数と
等しいとは限らない。位相は任意であり、縮退があると同じエネルギーの状態どうしが混ざり得る。

既約k点と重み
--------------

メッシュを自分自身に写す対称操作で、 :eq:`ikp-kmap` によって互いに移り合う点を一組にする。
行先は :math:`\boldsymbol G` を法として考えるので、BZの境界で逆格子ベクトルだけ違う点は1点と数える。
各組から1点ずつ選んだ代表が既約k点である。

組の点数 :math:`m_i` は、使う操作の数 :math:`N_{\rm op}` から決まる。代表点 :math:`\boldsymbol k_i` を
（:math:`\boldsymbol G` を法として）自分自身に戻す操作が :math:`s_i` 個あるとする。
:math:`Q\boldsymbol k_i\equiv Q'\boldsymbol k_i` となるのは :math:`Q^{-1}Q'` が
:math:`\boldsymbol k_i` を戻すときなので、組のどの点にもちょうど :math:`s_i` 個の操作が行き着き、

.. math::
   :label: ikp-orbit

   m_i=\frac{N_{\rm op}}{s_i}

である。一般の点では :math:`s_i=1` で組は :math:`N_{\rm op}` 点になり、Γ点のような対称性の高い点では
組が小さい。

等間隔メッシュの全 :math:`N_k` 点が等しい重みを持ち、被積分量 :math:`A(\boldsymbol k)` が
同じ組で等しいとき、 :eq:`kps-irreducible` の重みは

.. math::
   :label: ikp-weight

   \frac{1}{N_k}\sum_{\boldsymbol k\in\text{メッシュ}}A(\boldsymbol k)
   =\sum_{i=1}^{N_{\rm irr}}\frac{m_i}{N_k}A(\boldsymbol k_i),\qquad
   \sum_i m_i=N_k,\quad \sum_i\frac{m_i}{N_k}=1

と書ける。代表点に組の点数を掛けることで、元の和を正確に再現する。
:math:`A(\boldsymbol k)` がエネルギーと占有数だけで決まる量（バンドエネルギーや電子数）なら、
:eq:`ikp-bands` から同じ組で等しい。一方、電子密度へのk点ごとの寄与は位置の関数で、
:eq:`ikp-transform` から :math:`|(U_g\psi_{\boldsymbol k})(\boldsymbol r)|^2=|\psi_{\boldsymbol k}(g^{-1}\boldsymbol r)|^2`
なので、 :math:`Q\boldsymbol k` の寄与は :math:`\boldsymbol k` の寄与を :math:`g` で移したものになる。
代表点だけの和を、各操作で移して平均（対称化）してから使う。

正方格子の2次元メッシュ
------------------------

90度回転と鏡映の8操作を持つ正方格子の結晶で、Γ点を中心とする :math:`3\times3` メッシュを考える。
逆格子の基本ベクトルを :math:`\boldsymbol b_1,\boldsymbol b_2` とすると、
:math:`\boldsymbol k=s_1\boldsymbol b_1+s_2\boldsymbol b_2` の :math:`s_1,s_2` はそれぞれ
:math:`-1/3,0,1/3` のいずれかである。9点は次の3組に分かれる（横が :math:`\boldsymbol b_1`\ 、
縦が :math:`\boldsymbol b_2` の方向）。同じ記号は互いに等価な点を示す。 ::

   III    II    III
    II     I     II
   III    II    III

Iは中心のΓ点、IIは軸上、IIIは対角方向の点である。Γ点は8操作すべてで自分自身に戻るので
:math:`m=8/8=1`\ 、軸上の点はその軸に沿う鏡映と恒等操作の2個で戻るので :math:`m=8/2=4`\ 、
対角方向の点も対角線に沿う鏡映と恒等操作で戻るので :math:`m=4` である。
:eq:`ikp-weight` の重みはそれぞれ :math:`1/9,4/9,4/9` となり、
例えば各組での値を :math:`A_{\rm I},A_{\rm II},A_{\rm III}` とすると、元の9点の平均は
:math:`(A_{\rm I}+4A_{\rm II}+4A_{\rm III})/9` である。鏡映の線に乗らない一般の点があれば、
その組は8点になる。

Cuの計算例
----------

`Quloud ExamplesのCuの計算 <https://example.quloud-platform.quemix.com/kpoints/kpoint_convergence.html#sec-kp-irreducible>`_
では、fcc Cuの基本単位胞についてΓ点を含む :math:`4\times4\times4` メッシュの
64点が、Quantum ESPRESSO 7.5で8個の既約k点にまとめられる。各点の座標と重みはリンク先の表にある。
fccの点群の操作は :math:`N_{\rm op}=48` 個である。8組の点数 :math:`m_i` と、代表点を自分自身に
戻す操作の数 :math:`s_i` は、Γ点（1, 48）、Γ–L上（8, 6）、L点（4, 12）、Γ–X上（6, 8）、
対称線の外の点（24, 2）、Γ–K上（12, 4）、X点（3, 16）、W点（6, 8）で、どれも
:eq:`ikp-orbit` を満たし、点数の合計は64である。このメッシュの点はどれも何らかの鏡映面の上にあるので、
48点の組は現れない。

L点とX点はBZの境界にある。L点の方向は8つある（ :math:`2\pi/a` 単位で
:math:`(\pm\frac12,\pm\frac12,\pm\frac12)`\ ）が、 :math:`(\frac12,\frac12,\frac12)` と
:math:`(-\frac12,-\frac12,-\frac12)` のように逆格子ベクトル :math:`(1,1,1)` だけ違う2点は同じ点なので、
4点と数える。X点も同様に6方向が3点になる。

正規化した重みは :math:`m_i/64` で、例えばΓ点は :math:`1/64`\ 、24点の組は :math:`24/64` である。
QEの出力の重み ``wk`` は、スピン偏極のない計算ではスピンの縮退を含めて合計が2になるように
書かれるので、比較するときはその総和を確かめる。

適用範囲
--------

* 結晶の対称性だけでなく、シフトを含むメッシュ自体が使う操作で不変でなければならない。
  メッシュを保たない操作は使わず、保つ操作だけで組を作る。
* ベクトルやテンソルの成分は一般に組の各点で同じ値ではない。電子密度と同じく、
  量自体の変換を考慮して全点の寄与を復元する。
* 時間反転：スカラー波動関数でハミルトニアンが実なら、 :math:`\psi_{\boldsymbol k}^*` も
  同じエネルギーの固有状態で、 :eq:`ikp-bloch` の複素共役から波数は :math:`-\boldsymbol k` である。
  したがって反転操作がない結晶でも :math:`\varepsilon_n(-\boldsymbol k)=\varepsilon_n(\boldsymbol k)`
  が成り立ち、既約化に使える。CuやSiのように点群が反転を含めば、新しい対応は加わらない。
  外部磁場がある場合や、磁性をスピン軌道相互作用とともに扱う場合には、この対応は一般に成り立たない。
* スピン偏極計算：スピン軌道相互作用を含まない共線磁性では、スピンごとのハミルトニアンが実なので
  :math:`\boldsymbol k\leftrightarrow-\boldsymbol k` は残る。ただし磁気秩序は原子配置より
  対称性が低いことがあり（反強磁性体で、同じ元素でも向きの逆の原子を入れ替える操作など）、
  使える空間の操作が減る。
* スピン軌道相互作用を含む場合、操作はスピンにも作用するので、 :eq:`ikp-transform` に
  スピンの回転が加わる。波数の対応 :eq:`ikp-kmap` は同じ導出で成り立つが、どの操作が
  ハミルトニアンを保つかは磁気構造によって変わる。

既約化は元のメッシュの和を整理する操作であり、積分近似を粗くするものではない。
メッシュの密度に対する収束は別に確かめる必要がある。並進部分が波動関数の位相に与える影響や、
空間群による状態の分類は本稿では扱わない。

関連項目
--------

* :ref:`k点サンプリングとブリルアンゾーン積分<kpoint_sampling>`：積分の近似と収束。
* :ref:`lattice`：格子行列・逆格子行列と分率座標。
* `Quloud ExamplesのCuの既約k点 <https://example.quloud-platform.quemix.com/kpoints/kpoint_convergence.html#sec-kp-irreducible>`_
* `spglibの逆格子メッシュの説明 <https://spglib.readthedocs.io/en/stable/api/autodoc/spglib.kpoints.html>`_：
  メッシュ、シフト、時間反転の扱いと既約点への対応。

参考資料
--------

* H. J. Monkhorst and J. D. Pack, “Special points for Brillouin-zone integrations,”
  *Physical Review B* **13**, 5188–5192 (1976),
  `doi:10.1103/PhysRevB.13.5188 <https://doi.org/10.1103/PhysRevB.13.5188>`_.
* M. S. Dresselhaus, G. Dresselhaus, and A. Jorio, *Group Theory: Application to the
  Physics of Condensed Matter* (Springer, 2008).
