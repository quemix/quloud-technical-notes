.. _unitcell:

==============================
ブラベー格子と結晶系
==============================

格子の分類
----------

格子点・基本単位胞・慣用単位胞・中心並進の定義は :ref:`lattice` で述べた。格子は、基本並進ベクトルの長さや角度を連続的に変えれば無数に作れる。これらを、格子が持つ対称性（格子点を自分自身に重ねる回転・鏡映と、慣用単位胞の中心並進の種類）によって分類したものがブラベー（Bravais）格子型であり、3次元では14種類ある。14は格子の個数ではなく型の数である。原子配置の対称性まで含めた分類は :ref:`point-and-space-groups` で扱う。

表の行は格子系、後の図を載せた節の見出しは、原子配置の対称性をもとにした結晶系である。
多くは一対一に対応するが、菱面体格子系・六方格子系と三方晶系・六方晶系の組では、
一つの結晶系に複数の格子系が現れる。

.. list-table:: 3次元の14ブラベー格子型
   :header-rows: 1

   * - 格子系
     - 慣用単位胞の中心化
     - 種類数
   * - 三斜
     - P
     - 1
   * - 単斜
     - P, C
     - 2
   * - 直方（斜方）
     - P, C, I, F
     - 4
   * - 正方
     - P, I
     - 2
   * - 菱面体
     - R
     - 1
   * - 六方
     - P
     - 1
   * - 立方
     - P, I, F
     - 3
   * - 合計
     -
     - 14

記号は慣用単位胞の中心並進の種類を表す。Pは単純（中心並進なし、格子点1個）、Iは体心（2個）、Fは面心（4個）、Cは1組の向かい合う面の中心に格子点を持つ底心（2個。軸の選び方によりA、Bとも書く）である。Rは菱面体格子で、基本単位胞は菱面体、六方軸の慣用単位胞では格子点3個を含む（:ref:`lt-rhombohedral-hexagonal`）。

菱面体格子（R）を持つ結晶は三方晶系に属する。三方晶系には、α石英のように六方格子（P）を
持つ結晶もある。六方晶系の結晶の格子は六方Pである。

------------------------------
三斜晶系
------------------------------

三斜格子（P）を含む。

.. raw:: html

    <div id="triclinic" style="width: 100%; height: 500px; margin-bottom: 20px;"></div>
    <script type="module">
        "use strict"
        import triclinic from '../../_static/js/triclinic.js';
        triclinic();
    </script>

------------------------------
単斜晶系
------------------------------

単純単斜格子、底心単斜格子を含む。

.. raw:: html

    <div id="monoclinic" style="width: 100%; height: 500px; margin-bottom: 20px;"></div>
    <script type="module">
        "use strict"
        import monoclinic from '../../_static/js/monoclinic.js';
        monoclinic();
    </script>

------------------------------
直方晶系
------------------------------

斜方晶系と呼ばれることもある。単純直方格子、体心直方格子、面心直方格子、底心直方格子を含む。

.. raw:: html

    <div id="orthorhombic" style="width: 100%; height: 500px; margin-bottom: 20px;"></div>
    <script type="module">
        "use strict"
        import orthorhombic from '../../_static/js/orthorhombic.js';
        orthorhombic();
    </script>

------------------------------
正方晶系
------------------------------

単純正方格子、体心正方格子を含む。

.. raw:: html

    <div id="tetragonal" style="width: 100%; height: 500px; margin-bottom: 20px;"></div>
    <script type="module">
        "use strict"
        import tetragonal from '../../_static/js/tetragonal.js';
        tetragonal();
    </script>

------------------------------
三方晶系
------------------------------

菱面体格子（rhombohedral lattice、R）を含む。三方晶系の結晶には、六方格子（P）を持つものもある。

.. raw:: html

    <div id="trigonal" style="width: 100%; height: 500px; margin-bottom: 20px;"></div>
    <script type="module">
        "use strict"
        import trigonal from '../../_static/js/trigonal.js';
        trigonal();
    </script>

------------------------------
六方晶系
------------------------------

六方格子（P）を含む。

.. raw:: html

    <div id="hexagonal" style="width: 100%; height: 500px; margin-bottom: 20px;"></div>
    <script type="module">
        "use strict"
        import hexagonal from '../../_static/js/hexagonal.js';
        hexagonal();
    </script>

------------------------------------------------
立方晶系
------------------------------------------------

単純立方格子、体心立方格子、面心立方格子を含む。

.. raw:: html

    <div id="tetrahedral" style="width: 100%; height: 500px; margin-bottom: 20px;"></div>
    <script type="module">
        "use strict"
        import tetrahedral from '../../_static/js/tetrahedral.js';
        tetrahedral();
    </script>
