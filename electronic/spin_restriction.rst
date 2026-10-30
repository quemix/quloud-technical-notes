.. _spin_restriction:

スピン制限計算とスピン非制限計算
================================

Hartree–Fock（HF）法やKohn–Sham密度汎関数理論（KS-DFT）では、電子の
上向きスピン :math:`\alpha` と下向きスピン :math:`\beta` に対する空間軌道の
扱い方として、スピン制限とスピン非制限がある。両スピンに同じ空間軌道を使う
**スピン制限計算** と、別々に最適化する **スピン非制限計算** では、同じ分子でも
異なる解が得られることがある。本稿では、両者の方程式の違い、非制限解が
エネルギーを下げる仕組み、その代償として生じるスピン対称性の破れを式で追う。

**前提知識**: Slater行列式、HF法またはKS-DFTの概要、
:ref:`Löwdin解析<lowdin>` で導入した密度行列。

**学習目標**:

* スピン軌道とスピンごとの密度・密度行列を定義する。
* 閉殻のスピン制限方程式と、スピン非制限のPople–Nesbet方程式の違いを説明する。
* 非制限解のエネルギーが制限解以下になる理由と、安定性解析の考え方を説明する。
* 水素分子の解離を例に、スピン対称性の破れとスピン混入を式で確かめる。
* 単一行列式の :math:`\langle\hat S^2\rangle` を計算し、その値を解釈する。

スピン軌道とスピン密度
----------------------

電子1個の状態を、空間軌道 :math:`\phi(\boldsymbol r)` とスピン関数 :math:`\alpha`
または :math:`\beta` の積である **スピン軌道** で表す。:math:`N_\alpha` 個のα電子が
軌道 :math:`\phi_i^\alpha`、:math:`N_\beta` 個のβ電子が軌道 :math:`\phi_i^\beta` を
占有する単一のSlater行列式を考えると、各スピンの電子密度は

.. math::

   \rho^\alpha(\boldsymbol r)=\sum_{i=1}^{N_\alpha}|\phi_i^\alpha(\boldsymbol r)|^2,\qquad
   \rho^\beta(\boldsymbol r)=\sum_{i=1}^{N_\beta}|\phi_i^\beta(\boldsymbol r)|^2

であり、全電子密度とスピン密度は

.. math::
   :label: sr-spin-density

   \rho=\rho^\alpha+\rho^\beta,\qquad
   \rho_{\mathrm s}=\rho^\alpha-\rho^\beta

で与えられる。基底関数 :math:`\chi_\mu` で
:math:`\phi_i^\sigma=\sum_\mu\chi_\mu C^\sigma_{\mu i}` と展開すれば、スピンごとの
密度行列は :math:`D^\sigma_{\mu\nu}=\sum_{i}^{N_\sigma}C^\sigma_{\mu i}C^\sigma_{\nu i}`、
スピン和は :math:`D=D^\alpha+D^\beta` である。

スピン制限計算
--------------

閉殻の **スピン制限計算** では、:math:`N_\alpha=N_\beta=N/2` とし、両スピンに
同じ空間軌道 :math:`\phi_i^\alpha=\phi_i^\beta=\phi_i` を使う。各空間軌道に
電子が対になって入り、

.. math::

   D^\alpha=D^\beta=\frac{D}{2},\qquad \rho_{\mathrm s}(\boldsymbol r)=0

となる。HF法では軌道係数がRoothaan方程式

.. math::

   FC=SC\varepsilon

を満たす。:math:`S` は重なり行列、:math:`\varepsilon` は軌道エネルギーの
対角行列である。この方法をRHF（restricted HF）と呼び、KS-DFTで対応する方法を
RKSと呼ぶ。不対電子をもつ系を、二重占有の軌道と単占有の軌道を共通の空間軌道で
扱う制限開殻HF（ROHF）もある。

スピン非制限計算
----------------

**スピン非制限計算** では、α電子とβ電子の空間軌道を別々に最適化する。
HF法の場合、係数はPople–Nesbet方程式 [PN1954]_

.. math::
   :label: sr-pople-nesbet

   F^\alpha C^\alpha=SC^\alpha\varepsilon^\alpha,\qquad
   F^\beta C^\beta=SC^\beta\varepsilon^\beta

を満たす。αスピンのFock行列は

.. math::
   :label: sr-fock-alpha

   F^\alpha_{\mu\nu}=h_{\mu\nu}
   +\sum_{\lambda\sigma}\Bigl[D_{\lambda\sigma}(\mu\nu|\sigma\lambda)
   -D^\alpha_{\lambda\sigma}(\mu\lambda|\sigma\nu)\Bigr]

で、:math:`F^\beta` は :math:`\alpha` と :math:`\beta` を入れ替えたものである。
:math:`h` は1電子ハミルトニアン、:math:`(\mu\nu|\lambda\sigma)` は2電子積分である。
第2項のCoulomb項は全電子密度 :math:`D` で決まり、両スピンに共通である。
第3項の交換項は同じスピンの電子どうしにしか働かないので、:math:`D^\alpha` だけで
決まる。2つの方程式はCoulomb項を通じて結合しており、自己無撞着に解く。
この方法をUHF（unrestricted HF）と呼ぶ。KS-DFTでは交換項の代わりに、
:math:`\rho^\alpha` と :math:`\rho^\beta` に依存する交換相関ポテンシャル
:math:`v^\sigma_{\mathrm{xc}}` を使い、この方法をUKSと呼ぶ。

:eq:`sr-fock-alpha` から、:math:`D^\alpha=D^\beta` ならば :math:`F^\alpha=F^\beta` となる。
したがってRHF解は常にUHF方程式の解でもある。問題は、それがエネルギーの最小点か
どうかである。

変分原理と安定性
----------------

UHFの試行関数は、:math:`\phi_i^\alpha=\phi_i^\beta` という制約を外したものなので、
RHFの試行関数をすべて含む。変分原理から、最低エネルギーの解について

.. math::

   E_{\mathrm{UHF}}\le E_{\mathrm{RHF}}

が成り立つ。等号が成り立つ（UHF解がRHF解に一致する）系も多いが、RHF解の近くに
エネルギーを下げる方向があれば、UHFはスピン密度をもつ別の解に移る。

これを判定するのが **安定性解析** である。SCF解の周りで占有軌道と空軌道を
わずかに混ぜる回転を考え、エネルギーを回転のパラメータの2次まで展開する。
その係数行列（軌道ヘシアン）がすべて正の固有値をもてば、その解は考えた変分空間で
局所的な最小である。負の固有値があれば、その固有ベクトルの方向にエネルギーの低い
解が存在する [SP1977]_。RHF解に対しては、αとβの軌道を同じように回転させる
RHF→RHF（一重項）の安定性と、αとβを逆向きに回転させてスピン密度を生じさせる
RHF→UHF（三重項）の安定性を調べる。後者に負の固有値があれば、RHF解より
エネルギーの低いUHF解がある。

簡単な例：水素分子の解離
------------------------

最小基底の水素分子で、2つの原子の1s関数を :math:`\chi_A`、:math:`\chi_B`、
重なりを :math:`s` とする。RHFでは両方の電子が結合性軌道
:math:`\sigma_g=(\chi_A+\chi_B)/\sqrt{2(1+s)}` に入り、波動関数の空間部分は

.. math::
   :label: sr-h2-rhf

   \sigma_g(1)\sigma_g(2)=\frac{1}{2(1+s)}
   \Bigl[\underbrace{\chi_A(1)\chi_B(2)+\chi_B(1)\chi_A(2)}_{\text{共有結合項}}
   +\underbrace{\chi_A(1)\chi_A(2)+\chi_B(1)\chi_B(2)}_{\text{イオン項}}\Bigr]

となる。共有結合項は2つの電子が別々の原子にいる配置（H–H）、イオン項は
両方が同じ原子にいる配置（H\ :sup:`+`\ H\ :sup:`−`）を表す。RHFでは両者の重みが
原子間距離によらず等しい。原子を引き離すと、正しい解離極限は中性の水素原子2個
であるにもかかわらず、RHFのエネルギーはイオン対の寄与を含んだまま高い値に向かう。

UHFでは、α電子とβ電子の軌道を

.. math::

   \phi^\alpha\propto\cos\theta\,\chi_A+\sin\theta\,\chi_B,\qquad
   \phi^\beta\propto\sin\theta\,\chi_A+\cos\theta\,\chi_B

のように別々に選べる。:math:`\theta=\pi/4` がRHFの解である。原子間距離が
Coulson–Fischer点と呼ばれる距離を超えると、:math:`\theta\ne\pi/4` の解の方が
エネルギーが低くなり、α電子とβ電子が別々の原子に偏る [CF1949]_。
解離極限（:math:`s\to0`、:math:`\theta\to0`）では、α電子が原子A、β電子が
原子Bにある行列式

.. math::
   :label: sr-h2-uhf

   \Phi_{\mathrm{UHF}}=|\chi_A\alpha\,\chi_B\beta|
   =\frac{1}{\sqrt2}\left({}^1\Psi+{}^3\Psi_0\right)

となり、エネルギーは水素原子2個の和に一致する。ここで :math:`{}^1\Psi` は
一重項（共有結合の Heitler–London 関数）、:math:`{}^3\Psi_0` は
:math:`M_S=0` の三重項である。UHFは正しい解離エネルギーを与える代わりに、
一重項と三重項が半分ずつ混ざった、全スピンの定まらない状態になっている。

スピン混入と :math:`\langle\hat S^2\rangle`
-------------------------------------------

非相対論的なハミルトニアンはスピンに依存しないので、厳密な固有状態は全スピン
演算子 :math:`\hat S^2` の固有状態であり、:math:`\langle\hat S^2\rangle=S(S+1)` となる。
単一のSlater行列式では、:math:`S_z=(N_\alpha-N_\beta)/2` として

.. math::
   :label: sr-s2

   \langle\hat S^2\rangle
   =S_z(S_z+1)+N_\beta
   -\sum_{i=1}^{N_\alpha}\sum_{j=1}^{N_\beta}
   \bigl|\langle\phi_i^\alpha|\phi_j^\beta\rangle\bigr|^2

が成り立つ [Szabo1996]_。閉殻RHFでは占有軌道どうしの重なりが単位行列になり、
最後の和が :math:`N_\beta` に等しいので :math:`\langle\hat S^2\rangle=0` である。
非制限計算でαとβの占有軌道がずれると、重なりの和が減り、:math:`\langle\hat S^2\rangle`
は正しい値 :math:`S(S+1)` より大きくなる。この、異なる全スピンの状態が混ざる
現象を **スピン混入** という。:math:`S_z=0` の場合、:eq:`sr-s2` から
:math:`0\le\langle\hat S^2\rangle\le N_\beta` であり、上限はαとβの占有軌道が
互いに直交するときに達する。

解離した水素分子 :eq:`sr-h2-uhf` では :math:`N_\alpha=N_\beta=1`、
:math:`\langle\chi_A|\chi_B\rangle=0` なので :math:`\langle\hat S^2\rangle=1` となり、
一重項（0）と三重項（2）を半分ずつ混ぜた値に一致する。

αとβの軌道エネルギーが一致する場合
----------------------------------

スピン非制限解ではαとβのFock行列が異なるので、軌道エネルギーも一般には異なる。
ただし、空間対称操作でαとβの分布が入れ替わる場合は一致する。原子の並べ替えを
表す直交行列を :math:`R`\ （:math:`R^2=I`）とし、:math:`h`、:math:`S`、2電子積分が
:math:`R` で不変であるとする。解が

.. math::

   D^\beta=RD^\alpha R^{\mathsf T}

を満たすと、全密度 :math:`D=D^\alpha+D^\beta` は :math:`R` で不変になる。
:eq:`sr-fock-alpha` のCoulomb項は不変で、交換項は :math:`D^\alpha` から
:math:`D^\beta` に移るので :math:`F^\beta=RF^\alpha R^{\mathsf T}` となる。
:math:`F^\alpha` と :math:`F^\beta` は直交変換で結ばれるから、
:eq:`sr-pople-nesbet` の固有値は一致する。例えば偶数個の原子からなる鎖の
反転 :math:`i\to N+1-i` は奇数番目と偶数番目の原子を入れ替えるので、1つおきに
スピンが反転した解はこの条件を満たしうる。

説明用の事例：水素原子鎖
------------------------

`水素原子を並べると電子バンドは生まれるのか <https://example.quloud-platform.quemix.com/hydrogen_chain/band_formation.html>`_
では、STO-3G基底で原子間隔1.8 Åの中性水素原子鎖を、RHF、RKS-PBE、UHF、UKS-PBEで
計算している（Psi4 1.10、:math:`N_\alpha=N_\beta=N/2`）。例題の再現用データから、
:math:`N=32` の値を次にまとめる。

.. list-table:: :math:`N=32` の水素原子鎖でのスピン制限解と非制限解
   :header-rows: 1
   :widths: 22 26 26 26

   * - 手法
     - 制限解からのエネルギー変化（1原子あたり）
     - Löwdin原子スピン密度（鎖の中央）
     - :math:`\langle\hat S^2\rangle`
   * - RHF
     - 0
     - 0
     - 0
   * - UHF
     - −1.49 eV
     - :math:`\pm0.895`
     - 12.97
   * - RKS-PBE
     - 0
     - 0
     - 0
   * - UKS-PBE
     - −0.125 eV
     - :math:`\pm0.614`
     - 6.89

非制限計算では、:ref:`Löwdin解析<lowdin>` による原子スピン密度が原子ごとに符号を変える
反強磁性的な解が得られ、エネルギーは同じ手法の制限解より低い。UHFの
:math:`\langle\hat S^2\rangle` は、:math:`S_z=0` の上限 :math:`N_\beta=16` に近い。
α電子とβ電子が1つおきの原子にほぼ分かれており、解離した水素分子 :eq:`sr-h2-uhf`
と同じ種類のスピン混入が鎖全体で起きていると解釈できる。また、例題のデータでは
原子スピン密度が :math:`m_{N+1-i}=-m_i` を数値精度で満たし、αとβの軌道エネルギーは
一致している。これは前節の対称性の議論と整合する。

UKSの :math:`\langle\hat S^2\rangle` は、Kohn–Sham軌道の行列式に :eq:`sr-s2` を
適用した値である。Kohn–Sham行列式は実際の多電子波動関数ではないので、この値は
スピン対称性の破れの程度を示す目安として扱う [Theophilou2007]_。

解釈と限界
----------

非制限計算で得たエネルギーの低い解は、スピン対称性を破った平均場解であり、
全スピンの定まった厳密な固有状態をそのまま表すものではない。エネルギーが下がる
ことは、制限計算では表せなかった電子相関の一部を、スピン密度の空間的な秩序という
形で取り込んだ結果と見ることができる。一方で、スピン密度や :math:`\langle\hat S^2\rangle`
など、対称性に関わる量は大きく歪むことがある。

どちらの解を使うべきかは、調べたい性質と系による。開殻分子や磁性体では非制限計算が
標準的に使われる。結合の解離や強い電子相関をもつ系で対称性の破れが起きた場合は、
スピン射影や多配置の方法など、より高い水準の方法での確認が必要になる。
HFとKS-DFTではエネルギー汎関数が異なるので、エネルギーの比較は同じ手法の中で行う。

関連項目
--------

* :ref:`lowdin`
* :ref:`bond_order`
* :ref:`tightbinding`
* `水素原子を並べると電子バンドは生まれるのか <https://example.quloud-platform.quemix.com/hydrogen_chain/band_formation.html>`_

参考資料
--------

* `PySCF: Self-consistent field (SCF) methods <https://pyscf.org/user/scf>`_

.. [Szabo1996] A. Szabo and N. S. Ostlund, *Modern Quantum Chemistry: Introduction to
   Advanced Electronic Structure Theory* (Dover, 1996), Chaps. 2–3.
.. [PN1954] J. A. Pople and R. K. Nesbet, “Self-Consistent Orbitals for Radicals,”
   *Journal of Chemical Physics* **22**, 571–572 (1954),
   `doi:10.1063/1.1740120 <https://doi.org/10.1063/1.1740120>`_.
.. [SP1977] R. Seeger and J. A. Pople, “Self-consistent molecular orbital methods.
   XVIII. Constraints and stability in Hartree–Fock theory,”
   *Journal of Chemical Physics* **66**, 3045–3050 (1977),
   `doi:10.1063/1.434318 <https://doi.org/10.1063/1.434318>`_.
.. [CF1949] C. A. Coulson and I. Fischer, “Notes on the molecular orbital treatment of
   the hydrogen molecule,” *Philosophical Magazine* **40**, 386–393 (1949),
   `doi:10.1080/14786444908521726 <https://doi.org/10.1080/14786444908521726>`_.
.. [Theophilou2007] I. Theophilou, S. Thanos, and A. K. Theophilou, “Spin contamination
   for Hartree–Fock, optimized effective potential, and density functional
   approximations,” *Journal of Chemical Physics* **127**, 234103 (2007),
   `doi:10.1063/1.2805367 <https://doi.org/10.1063/1.2805367>`_.
