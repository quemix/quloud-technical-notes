(() => {
    // 記事の分割や節の移動で別の場所へ移った見出し・図表・式の旧アンカーを、移動先へ送る。
    // URLの # 以降はサーバーに送られないので、旧ページのブラウザ側で転送する。
    // 転送先は最終的な掲載先を直接指す（転送を二段にしない）。
    const redirects = {
        // 2026-11-22 の分割前の lattice.html（「格子と格子ベクトル」）
        "lattice": {
            "#lattice-metric": "lattice_metric.html#lattice-metric",
            "#id7": "lattice_metric.html#lattice-metric",
            "#equation-lattice-metric-volume": "lattice_metric.html#equation-lattice-metric-volume",
            "#lattice-dof": "lattice_metric.html#lattice-dof",
            "#id8": "lattice_metric.html#lattice-dof",
            "#equation-len-and-ang": "lattice_metric.html#equation-len-and-ang",
            "#reciprocal-lattice": "reciprocal_lattice.html",
            "#id9": "reciprocal_lattice.html",
            "#equation-bvec": "reciprocal_lattice.html#equation-bvec",
            "#equation-ortho": "reciprocal_lattice.html#equation-ortho",
            "#fig-lattice-reciprocal-vectors": "reciprocal_lattice.html#fig-lattice-reciprocal-vectors",
            "#equation-bmat": "reciprocal_lattice.html#equation-bmat",
            "#equation-abortho": "reciprocal_lattice.html#equation-abortho",
            "#equation-inverse": "reciprocal_lattice.html#equation-inverse",
        },
        // 2026-11 の最初の分割前と、2026-11-22 の分割前の lattice_transform.html
        "lattice_transform": {
            "#id2": "#lt-primitive-basis",
            "#cartesian": "#lt-cartesian-rotation",
            "#id8": "#lt-origin-shift",
            "#id9": "#lt-reciprocal-transform",
            "#id15": "#lt-transform-related",
            "#id18": "#lt-transform-summary",
            "#id19": "#lt-basis-figure",
            "#id3": "#lt-supercell",
            "#fcc": "unitcell_transform.html#lt-fcc-cell",
            "#bravais": "unitcell_transform.html#lt-special-cells",
            "#r": "unitcell_transform.html#lt-rhombohedral-hexagonal",
            "#pc": "unitcell_transform.html#lt-hexagonal-orthogonal",
            "#id6": "unitcell_transform.html#lt-fcc-tetragonal",
            "#id7": "unitcell_transform.html#lt-rhombohedral-cubic",
            "#id16": "unitcell_transform.html#lt-cell-references",
            "#id20": "unitcell_transform.html#lt-fcc-cell-figure",
            "#id21": "unitcell_transform.html#lt-fcc-direction-figure",
            "#id22": "unitcell_transform.html#lt-rhombohedral-cubic-table",
            "#id10": "crystal_structure_input.html#lt-standardize-cell",
            "#id11": "crystal_structure_input.html#lt-input-formats",
            "#cif": "crystal_structure_input.html#lt-cif",
            "#quantum-espresso": "crystal_structure_input.html#lt-quantum-espresso",
            "#spr-kkr": "crystal_structure_input.html#lt-spr-kkr",
            "#lammps": "crystal_structure_input.html#lt-lammps",
            "#lt-array-conventions": "crystal_structure_input.html#lt-array-conventions",
            "#id12": "crystal_structure_input.html#lt-array-conventions",
            "#id13": "unitcell_transform.html#lt-numerical-check",
            "#id14": "crystal_structure_input.html#lt-common-mistakes",
            "#cell-parameters-to-cartesian": "lattice_metric.html#cell-parameters-cartesian",
            "#cell-parameters-cartesian": "lattice_metric.html#cell-parameters-cartesian",
            "#equivalent-direction-families": "point_and_space_groups.html#equivalent-directions",
            "#equivalent-directions": "point_and_space_groups.html#equivalent-directions",
            "#lt-index-brackets": "point_and_space_groups.html#lt-index-brackets",
            "#equation-equivalent-direction-family": "point_and_space_groups.html#equation-equivalent-direction-family",
            "#direction-and-plane-normal": "crystal_directions_planes.html#direction-and-plane-normal",
            "#fig-crystal-direction-and-plane-normal": "crystal_directions_planes.html#fig-crystal-direction-and-plane-normal",
        },
        // 2026-11-22 の分割前の unitcell_transform.html（「単位胞の変換と超胞」）
        "unitcell_transform": {
            "#lt-supercell": "lattice_transform.html#lt-supercell",
            "#id3": "lattice_transform.html#lt-supercell",
            "#fig-supercell-periodic-images": "lattice_transform.html#fig-supercell-periodic-images",
            "#pseudocubic-perovskite": "pseudocubic.html",
            "#pseudocubic-cell": "pseudocubic.html",
            "#equation-pseudocubic-transform": "pseudocubic.html#equation-pseudocubic-transform",
            "#lt-batio3-pseudocubic-table": "pseudocubic.html#lt-batio3-pseudocubic-table",
            "#pseudocubic-orthorhombic-cell": "pseudocubic.html#pseudocubic-orthorhombic",
            "#pseudocubic-orthorhombic": "pseudocubic.html#pseudocubic-orthorhombic",
            "#equation-pseudocubic-orthorhombic": "pseudocubic.html#equation-pseudocubic-orthorhombic",
            "#fig-pseudocubic-orthorhombic-cell": "pseudocubic.html#fig-pseudocubic-orthorhombic-cell",
            "#equation-pseudocubic-orthorhombic-lengths": "pseudocubic.html#equation-pseudocubic-orthorhombic-lengths",
            "#pseudocubic-settings": "pseudocubic.html#pseudocubic-settings",
            "#pseudocubic-limits": "pseudocubic.html#pseudocubic-limits",
            "#id6": "#lt-fcc-tetragonal",
            "#id7": "#lt-rhombohedral-cubic",
            "#id8": "#lt-cell-related",
            "#id9": "#lt-cell-references",
        },
        // 2026-11-22 の分割前の crystal_structure_input.html
        "crystal_structure_input": {
            "#lt-numerical-check": "unitcell_transform.html#lt-numerical-check",
            "#id5": "unitcell_transform.html#lt-numerical-check",
            "#id6": "#lt-common-mistakes",
            "#id7": "#lt-input-references",
        },
        // 2026-11-23 の分割前の kpoint_sampling.html（「k点サンプリングとブリルアンゾーン積分」）
        "kpoint_sampling": {
            "#kpoint-fermi-surface": "metal_bz_integration.html#kpoint-fermi-surface",
            "#id4": "metal_bz_integration.html#kpoint-fermi-surface",
            "#fig-kps-model": "metal_bz_integration.html#fig-kps-model",
            "#id5": "metal_bz_integration.html#smearing",
            "#id6": "metal_bz_integration.html#smearing",
            "#id7": "metal_bz_integration.html#smearing",
            "#fig-kps-smearing": "metal_bz_integration.html#fig-kps-smearing",
            "#smearing-width": "metal_bz_integration.html#smearing-width",
            "#smearing-free-energy": "metal_bz_integration.html#smearing-and-free-energy",
            "#smearing-and-free-energy": "metal_bz_integration.html#smearing-and-free-energy",
            "#equation-kps-free-energy": "metal_bz_integration.html#equation-kps-free-energy",
            "#id8": "metal_bz_integration.html#smearing-and-free-energy",
            "#zero-smearing-limit": "metal_bz_integration.html#zero-smearing-limit",
            "#id9": "metal_bz_integration.html#zero-smearing-limit",
            "#id10": "metal_bz_integration.html#tetrahedron-method",
            "#id11": "metal_bz_integration.html#tetrahedron-method",
            "#id12": "metal_bz_integration.html#tetrahedron-method",
            "#fig-kpoint-linear-interpolation": "metal_bz_integration.html#fig-kpoint-linear-interpolation",
            "#tetrahedron-corrections": "metal_bz_integration.html#tetrahedron-corrections",
            "#id13": "metal_bz_integration.html#tetrahedron-corrections",
            "#id14": "metal_bz_integration.html#tetrahedron-corrections",
            "#cusik": "metal_bz_integration.html#metal-cu-example",
            "#id15": "#kps-interpretation-limits",
            "#id16": "#kps-related",
            "#id18": "#kps-references",
            "#equation-kps-irreducible": "irreducible_kpoints.html#equation-kps-irreducible",
            "#equation-kps-integral": "bandstructure.html#equation-kps-integral",
            "#methfessel1989": "metal_bz_integration.html#methfessel1989",
            "#marzari1999": "metal_bz_integration.html#marzari1999",
            "#mermin1965": "metal_bz_integration.html#mermin1965",
            "#gillan1989": "metal_bz_integration.html#gillan1989",
            "#jepsen1971": "metal_bz_integration.html#jepsen1971",
            "#lehmann1972": "metal_bz_integration.html#lehmann1972",
            "#blochl1994": "metal_bz_integration.html#blochl1994",
            "#kawamura2014": "metal_bz_integration.html#kawamura2014",
        },
        // 2026-11-23 に逆格子の記事へ統合する前の periodic.html（「周期性」）
        "periodic": {
            "#periodic": "reciprocal_lattice.html#periodic",
            "#id1": "reciprocal_lattice.html#periodic",
            "#equation-periodic0": "reciprocal_lattice.html#equation-periodic0",
            "#periodic-fourier-series": "reciprocal_lattice.html#periodic-fourier-series",
            "#id2": "reciprocal_lattice.html#periodic-fourier-series",
            "#fig-periodic-fourier-components": "reciprocal_lattice.html#fig-periodic-fourier-components",
        },
        // 2026-11-23 の再編前の periodic_boundary.html（「周期境界条件とバンドの折り返し」）
        "periodic_boundary": {
            "#pbc-allowed-wavevectors": "blochstheorem.html#pbc-allowed-wavevectors",
            "#id2": "blochstheorem.html#pbc-allowed-wavevectors",
            "#equation-pbc-allowed": "blochstheorem.html#equation-pbc-allowed",
            "#independent-wavevectors": "blochstheorem.html#pbc-wavevector-count",
            "#one-dimensional-wavevectors": "blochstheorem.html#pbc-wavevector-count",
            "#fig-pbc-allowed": "blochstheorem.html#fig-pbc-allowed",
            "#id3": "#pbc-band-folding",
            "#id4": "#pbc-folding-meaning",
            "#id5": "#pbc-related",
            "#id6": "#pbc-references",
        },
        // 2026-11-23 の再編前の brillouinzone.html（状態数と状態密度をバンド構造の記事へ移した）
        "brillouinzone": {
            "#dos": "bandstructure.html#density-of-states",
            "#id3": "bandstructure.html#density-of-states",
            "#density-of-states": "bandstructure.html#density-of-states",
            "#equation-n-e": "bandstructure.html#equation-state-count",
            "#equation-rho-e": "bandstructure.html#equation-rho-e",
            "#fig-band-state-count-and-dos": "bandstructure.html#fig-band-state-count-and-dos",
        },
        // 2026-11-23 に熱的性質を「格子振動の熱的性質」へ分ける前の phonon.html
        // （#id14〜#id17 は分割後のページで引用の戻りリンクの行き先なので転送しない）
        "phonon": {
            "#anharmonicity": "phonon_thermal.html#anharmonicity",
            "#zero-point-vibration": "phonon_thermal.html#zero-point-vibration",
            "#thermal-expansion": "phonon_thermal.html#thermal-expansion",
            "#equation-ph-zpe": "phonon_thermal.html#equation-ph-zpe",
            "#equation-ph-mean-energy": "phonon_thermal.html#equation-ph-mean-energy",
            "#equation-ph-qha-free-energy": "phonon_thermal.html#equation-ph-qha-free-energy",
            "#equation-ph-gruneisen": "phonon_thermal.html#equation-ph-gruneisen",
            "#equation-ph-thermal-pressure": "phonon_thermal.html#equation-ph-thermal-pressure",
            "#zhong1996": "phonon_thermal.html#zhong1996",
            "#baroni2010": "phonon_thermal.html#baroni2010",
            "#id18": "phonon_thermal.html#thermal-expansion",
            "#id19": "#batio3",
            "#id20": "#batio3",
            "#id21": "#batio3",
            "#id24": "#phonon-interpretation-limits",
            "#id25": "#lo-to-splitting",
            "#id26": "#phonon-related",
            "#id27": "#phonon-references",
            "#id28": "#phonon-bibliography",
            "#id22": "#phonon-bibliography",
        },
        // 2026-11-23 に分極の評価を「周期結晶の分極」へ分ける前の ferroelectric_origin.html
        // （#id14〜#id17 は分割後のページで引用の戻りリンクの行き先なので転送しない）
        "ferroelectric_origin": {
            "#polarization-evaluation": "polarization.html",
            "#fo-polarization-quantum": "polarization.html#fo-polarization-quantum",
            "#born": "polarization.html#fo-born-charge",
            "#fo-born-charge": "polarization.html#fo-born-charge",
            "#berry": "polarization.html#fo-berry-phase",
            "#fo-berry-phase": "polarization.html#fo-berry-phase",
            "#equation-fo-polarization-quantum": "polarization.html#equation-fo-polarization-quantum",
            "#equation-fo-born-charge": "polarization.html#equation-fo-born-charge",
            "#equation-fo-linear-polarization": "polarization.html#equation-fo-linear-polarization",
            "#equation-fo-wannier-center": "polarization.html#equation-fo-wannier-center",
            "#equation-fo-wannier-polarization": "polarization.html#equation-fo-wannier-polarization",
            "#tbl-born-charges-batio3": "polarization.html#tbl-born-charges-batio3",
            "#tbl-polarization-estimate": "polarization.html#tbl-polarization-estimate",
            "#ghosezmichenaudgonze1998": "polarization.html#ghosezmichenaudgonze1998",
            "#spaldin2012": "polarization.html#spaldin2012",
            "#zhongkingsmithvanderbilt1994": "polarization.html#zhongkingsmithvanderbilt1994",
            "#buttnermaslen1992": "polarization.html#buttnermaslen1992",
            "#wieder1955": "polarization.html#wieder1955",
            "#kingsmithvanderbilt1993": "polarization.html#kingsmithvanderbilt1993",
            "#vanderbiltkingsmith1993": "polarization.html#vanderbiltkingsmith1993",
            "#resta1994": "polarization.html#resta1994",
            "#id18": "polarization.html#fo-polarization-quantum",
            "#id19": "polarization.html#fo-born-charge",
            "#id20": "polarization.html#fo-born-charge",
            "#id21": "polarization.html#fo-born-charge",
            "#id22": "polarization.html#fo-born-charge",
            "#id23": "polarization.html#fo-born-charge",
            "#id24": "polarization.html#fo-born-charge",
            "#id25": "polarization.html#polarization-batio3-example",
            "#id26": "polarization.html#polarization-batio3-example",
            "#id27": "polarization.html#polarization-batio3-example",
            "#id28": "polarization.html#fo-berry-phase",
            "#id29": "polarization.html#fo-berry-phase",
            "#id30": "polarization.html#fo-berry-phase",
            "#id31": "polarization.html#fo-berry-phase",
            "#id32": "polarization.html#fo-berry-phase",
            "#id33": "polarization.html#fo-berry-phase",
            "#id35": "polarization.html#polarization-limits",
            "#id39": "polarization.html#ghosezmichenaudgonze1998",
            "#id34": "#fo-interpretation-limits",
            "#id36": "#fo-related",
            "#id37": "polarization.html#polarization-references",
            "#id38": "#fo-bibliography",
        },
        // 2026-11-23 に自由エネルギーの展開を「Landau理論と相転移の次数」へ移す前の ferroelectricity.html
        // （このページの末尾の独自スクリプトは、2026-11の拡張前の自動アンカーを扱う。キーは重ならない）
        "ferroelectricity": {
            "#equation-fe-devonshire": "landau_theory.html#equation-fe-devonshire",
            "#equation-fe-curie-constant": "landau_theory.html#equation-fe-curie-constant",
            "#equation-fe-first-order": "landau_theory.html#equation-fe-first-order",
        },
        // 2026-11-23 に末尾の「参考資料」と「参考文献」を1つの節にまとめる前の phonon_thermal.html と polarization.html
        "phonon_thermal": {
            "#id13": "#phonon-thermal-bibliography",
        },
        "polarization": {
            "#id29": "#wieder1955",
        },
    };

    const page = window.location.pathname.split("/").pop().replace(/\.html$/, "");
    const destinations = redirects[page] || {};

    // 旧ページの自動ID（#idN）は、後の版で引用の参照箇所（<a id="idN">）に使い回されることがある。
    // 今のページでそのIDが引用の参照箇所なら、戻りリンクや共有されたURLの行き先として扱い、転送しない。
    function isCitationReference(hash) {
        const element = document.getElementById(decodeURIComponent(hash.slice(1)));
        return element !== null && element.tagName === "A";
    }

    function redirectLegacyAnchor() {
        const destination = destinations[window.location.hash];
        if (destination && !isCitationReference(window.location.hash)) {
            window.location.replace(destination);
        }
    }

    redirectLegacyAnchor();
    window.addEventListener("hashchange", redirectLegacyAnchor);
})();
