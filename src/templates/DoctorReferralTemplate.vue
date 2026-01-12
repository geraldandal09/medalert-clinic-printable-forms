<template>
    <default-print-layout>
        <div class="form">
            <label>Dr.</label>
            <input type="text" v-model="dynamicFields.referredDoctorName"
            /><label>,</label>
        </div>
        <div>
            <EditableTextarea
                :value.sync="dynamicFields.referredClinicAddress"
                placeholder="Clinic Address"
            />
        </div>
        <div>
            <label>Respectfully referring patient</label>
            <span><input type="text" name="name" v-model="dynamicFields.patientName"></span>
        </div>
        <div style="margin-top: 12px;">
            <label>With complaints of:</label>
            <EditableTextarea
                :value.sync="dynamicFields.complaints"
            />
        </div>
        <div>
            <label>Impression:</label>
            <EditableTextarea
                :value.sync="dynamicFields.impression"
            />
        </div>
        <div>
            <label>Reason for referral:</label>
            <EditableTextarea
                :value.sync="dynamicFields.reason"
            />
        </div>
        <div>
            <label>Remarks:</label>
            <EditableTextarea
                :value.sync="dynamicFields.remarks"
            />
        </div>
    </default-print-layout>
</template>

<script>
export default {
    mounted: function () {
        this.registerEditableFields({
            referredDoctorName: '',
            referredClinicAddress: '',
            patientName: `${this.formData.patient.first_name} ${this.formData.patient.last_name}`,
            complaints: '',
            impression: '',
            reason: '',
            remarks: '',
        })
    }
}
</script>
