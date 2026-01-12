<template>
    <default-print-layout>
        <!-- Header content goes here if you want to override -->
        <template #header>
            <h1>
                Dr {{`${formData.doctor.first_name} ${formData.doctor.last_name}`}}
                <br />
                <small v-if="formData.doctor.specialization">{{ formData.doctor.specialization }}</small>
            </h1>

            <div style="width: 100%; padding-bottom: 1em;">
                <div
                    v-for="(clinic, clinicIndex) in formData.doctor.clinics"
                    v-bind:key="clinicIndex"
                    style="width: 50%; float: left; font-size: 12px;"
                >
                    <p>
                        {{ clinic.name }} <br />
                        {{`${clinic.address} ${clinic.locality}`}} <br />
                        {{ [clinic.appointments_hotline, clinic.contact_number].join(' / ') }}
                    </p>
                </div>
                <div class="clearfix"></div>
            </div>
            <hr>
            <h2>Rx</h2>
        </template>

        <!-- Content goes here -->
        <template #default>
            Prescription Code {{formData.prescription.prescription_code}} <br />
            {{`${formData.patient.first_name} ${formData.patient.last_name}`}} <br />
            {{ formData.patient.birth_date | formatDate('LL') }}

            <div
                style="padding: 1em"
                v-for="(medication, medicationIndex) in formData.prescription.secure_payload.medications"
                v-bind:key="medicationIndex"
            >
                <strong>{{ medication.generic_name }}</strong>
                <br />
                <span v-if="medication.brand_name">{{ medication.brand_name }}&nbsp;</span>
                <span>{{ medication.formulation }}</span>
                <br />
                <span>{{ medication.sig }}</span>
            </div>

            <div style="padding: 1em" v-if="formData.prescription.secure_payload.home_instructions">
                <strong>Home Instructions</strong>
                <br />
                {{ formData.prescription.secure_payload.home_instructions }}
            </div>
        </template>

        <!-- Footer content goes here if you want to override -->
        <template #footer></template>
    </default-print-layout>
</template>
