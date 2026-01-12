<template>
    <default-print-layout>
        <div>
            <div class="form-1">
                    <label style="font-size: .85em;"><strong>CBC</strong></label>
            </div>
            <div class="column-layout">
                <div class="first-column">
                    <label class="content-font-size">RBC Count</label>
                </div>
                <div class="second-column">
                    <label class="content-font-size">Hbg/Hct</label>
                </div>
                <div class="third-column">
                    <label class="content-font-size">Retic. Ct.</label>
                </div>
            </div>
            <div class="column-layout">
                <div class="first-column">
                    <label class="content-font-size">WBC Count</label>
                </div>
                <div class="second-column">
                    <label class="content-font-size">Seg/Lympho</label>
                </div>
                <div class="third-column">
                    <label class="content-font-size">Mono/Eo</label>
                </div>
            </div>
            <div class="column-layout">
                <div class="first-column">
                    <label class="content-font-size">MVC/MCH</label>
                </div>
                <div class="second-column">
                    <label class="content-font-size">Platelet</label>
                </div>
                <div class="third-column">
                    <label class="content-font-size" style="display: none;">CBC</label>
                </div>
            </div>
        </div>

        <div>
            <div class="form-1" style="margin-top: 10px;">
                    <label style="font-size: .85em;"><strong>URINALYSIS</strong></label>
            </div>
            <div class="column-layout">
                <div class="first-column">
                    <label class="content-font-size">Appearance</label>
                </div>
                <div class="second-column">
                    <label class="content-font-size">Sugar</label>
                </div>
                <div class="third-column">
                    <label class="content-font-size">Casts</label>
                </div>
            </div>
            <div class="column-layout">
                <div class="first-column">
                    <label class="content-font-size">Sp. Gravity</label>
                </div>
                <div class="second-column">
                    <label class="content-font-size">WBC</label>
                </div>
                <div class="third-column">
                    <label class="content-font-size">Crystals</label>
                </div>
            </div>
            <div class="column-layout">
                <div class="first-column">
                    <label class="content-font-size">pH</label>
                </div>
                <div class="second-column">
                    <label class="content-font-size">RBC</label>
                </div>
                <div class="third-column">
                    <label class="content-font-size">Morphology</label>
                </div>
            </div>
            <div class="column-layout">
                <div class="first-column">
                    <label class="content-font-size">Albumin</label>
                </div>
                <div class="second-column">
                    <label class="content-font-size" style="display: none;">-</label>
                </div>
                <div class="third-column">
                    <label class="content-font-size" style="display: none;">-</label>
                </div>
            </div>
        </div>

        <div>
            <div class="form-1" style="margin-top: 10px;">
                    <label style="font-size: .85em;"><strong>LIPID PANEL</strong></label>
            </div>
            <div class="column-layout">
                <div class="first-column">
                    <label class="content-font-size">Cholesterol</label>
                </div>
                <div class="second-column">
                    <label class="content-font-size">Triglyceride</label>
                </div>
                <div class="third-column">
                    <label class="content-font-size">HDL</label>
                </div>
            </div>
            <div class="column-layout">
                <div class="first-column">
                    <label class="content-font-size">LDL</label>
                </div>
                <div class="second-column">
                    <label class="content-font-size">VLDL</label>
                </div>
                <div class="third-column">
                    <label class="content-font-size" style="display: none;">-</label>
                </div>
            </div>
        </div>

        <div>
            <div class="form-1" style="margin-top: 10px;">
                    <label style="font-size: .85em;"><strong>DENGUE</strong></label>
            </div>
            <div class="column-layout">
                <div class="first-column">
                    <label class="content-font-size">NS1 Ag</label>
                </div>
                <div class="second-column">
                    <label class="content-font-size">IgG</label>
                </div>
                <div class="third-column">
                    <label class="content-font-size">iGM</label>
                </div>
            </div>
        </div>


        <div style="display: none;">
            <div class="form-1" style="margin-top: 10px;">
                    <label style="font-size: .85em;"><strong>SEROLOGY</strong></label>
            </div>
            <div class="column-layout">
                <div class="first-column">
                    <label class="content-font-size">C3</label>
                </div>
                <div class="second-column">
                    <label class="content-font-size">Rapid Dengue Test</label>
                </div>
                <div class="third-column">
                    <label class="content-font-size">RA Latex/Factor (Screening)</label>
                </div>
            </div>
            <div class="column-layout">
                <div class="first-column">
                    <label class="content-font-size">Ana</label>
                </div>
                <div class="second-column">
                    <label class="content-font-size">CRP (Screening)</label>
                </div>
                <div class="third-column">
                    <label class="content-font-size">TPHA</label>
                </div>
            </div>
            <div class="column-layout">
                <div class="first-column">
                    <label class="content-font-size">ASO</label>
                </div>
                <div class="second-column">
                    <label class="content-font-size">VDRL/RPR Screening</label>
                </div>
                <div class="third-column">
                    <label class="content-font-size">Dengue (Ns1)</label>
                </div>
            </div>
            <div class="column-layout">
                <div class="first-column">
                    <label class="content-font-size">Salmonella Typhi</label>
                </div>
                <div class="second-column">
                    <label class="content-font-size" style="display: none;">-</label>
                </div>
                <div class="third-column">
                    <label class="content-font-size" style="display: none;">-</label>
                </div>
            </div>
        </div>

        <div>
            <div style="margin-top: 10px;">
                <label class="content-font-size">Other Request/s:</label>
                <textarea class="underline-textbox" style="width: 100%;"></textarea>
            </div>
        </div>
    </default-print-layout>
</template>