<template>
    <section>
        <hr>
        <strong>Dr. {{ `${formData.doctor.first_name} ${formData.doctor.last_name}` }}</strong>
        <br>
        PRC License Number {{formData.doctor.license_number}}
    </section>
</template>