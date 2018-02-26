Bahmni.Clinical.Program.FormConditions.rules = {
    'DOT Option': function (patientProgramAttributes) {
        var conditions = {
            show: [],
            hide: []
        };
        if (patientProgramAttributes['DOT Option'] == 'Home-based DOT') {

            conditions.show.push('Name of Treatment Supporter');
            conditions.show.push('Tel No of Treatment Supporter');
            conditions.show.push('Physical Address of Treatment Supporter');
            conditions.show.push('Name of Community Support Organisation');
        } else if (patientProgramAttributes['DOT Option'] == 'Health Facility DOT') {
            conditions.hide.push('Name of Treatment Supporter');
            conditions.hide.push('Tel No of Treatment Supporter');
            conditions.hide.push('Physical Address of Treatment Supporter');
            conditions.hide.push('Name of Community Support Organisation');
        }
        return conditions;
    }
};
