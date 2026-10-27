.. _unitcell:

==============================
ブラべ格子と結晶系
==============================

単位胞、原始胞、慣用胞
----------------------

単位胞は、並進周期を表す格子ベクトルで張られる繰り返し単位である。原子の配置を含めた結晶の単位と、格子点だけを数える単位を区別する。:ref:`格子ベクトルと逆格子ベクトル<lattice>` および :ref:`格子座標<coordinates>` で用いるように、胞内の位置は格子ベクトルに対する分率座標で指定できる。

原始胞は結晶の格子点をちょうど1つ含む最小の胞で、胞の並進だけで格子点全体が生成される。慣用胞は格子の対称方向に沿うなど結晶学的に見やすい軸を選んだ胞であり、格子の中心化により複数の格子点を含むことがある。例えばF中心立方の慣用胞は、8つの頂点を共有分も含めて数えると1点、さらに6面の中心を共有分も含めて数えると3点を持ち、合計4格子点となる。原始胞と慣用胞の具体的な変換は :ref:`lattice-transform` を参照。

------------------------------
三斜晶系
------------------------------

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

菱面体格子（rhombohedral lattice）を含む。

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
