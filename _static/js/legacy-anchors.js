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
    };

    const page = window.location.pathname.split("/").pop().replace(/\.html$/, "");
    const destinations = redirects[page] || {};

    function redirectLegacyAnchor() {
        const destination = destinations[window.location.hash];
        if (destination) {
            window.location.replace(destination);
        }
    }

    redirectLegacyAnchor();
    window.addEventListener("hashchange", redirectLegacyAnchor);
})();
