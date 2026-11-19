(() => {
    // 分割前の lattice_transform.html に付いていた見出し・図表のアンカー。
    const destinations = new Map(Object.entries({
        "#id2": "#lt-primitive-basis",
        "#cartesian": "#lt-cartesian-rotation",
        "#id8": "#lt-origin-shift",
        "#id9": "#lt-reciprocal-transform",
        "#id15": "#lt-transform-related",
        "#id18": "#lt-transform-summary",
        "#id19": "#lt-basis-figure",
        "#fcc": "unitcell_transform.html#lt-fcc-cell",
        "#id3": "unitcell_transform.html#lt-supercell",
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
        "#id13": "crystal_structure_input.html#lt-numerical-check",
        "#id14": "crystal_structure_input.html#lt-common-mistakes",
    }));

    function redirectLegacyAnchor() {
        const destination = destinations.get(window.location.hash);
        if (destination) {
            window.location.replace(destination);
        }
    }

    redirectLegacyAnchor();
    window.addEventListener("hashchange", redirectLegacyAnchor);
})();
