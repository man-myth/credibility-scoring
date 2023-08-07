<template>
    <td>{{ loan.loan_id }}</td>
    <td>{{ loan.loan_type }}</td>
    <td>{{ loan.purpose }}</td>
    <td>{{ loan.loan_amount }}</td>
    <td>{{ new Date(loan.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long' , day:"numeric"}) }}</td>
    <td>{{ loan                                                           .duration}}</td>
    <td>{{ loan.validated_by }}</td>
    <td>{{ loan.loan_status }}</td>

</template>

<script>

export default {
    props: ['loan'],
    methods(){

    }

}
</script>

<style>
td {
    font-size: 0.8rem;
}

</style>