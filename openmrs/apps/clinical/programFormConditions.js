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
    },
    'Classification by site': function (patientProgramAttributes) {
        var conditions = {
            show: [],
            hide: []
        };
      console.log(patientProgramAttributes);
        if (patientProgramAttributes['Classification by site'] == 'Extra-pulmonary') {

            conditions.show.push('Site');
        } else
        {
            conditions.hide.push('Site');
        }
        return conditions;
    },

    'HIV Status': function (patientProgramAttributes) {
        var conditions = {
            show: [],
            hide: []
        };
        if (patientProgramAttributes['HIV Status'] == 'Negative') {
			conditions.hide.push('CPT');
            conditions.hide.push('CPT Start Date');
            conditions.hide.push('ART drugs');
            conditions.hide.push('ART Start Date');
            conditions.hide.push('HIV Care registration number');

           
        } else  {
             conditions.show.push('CPT');
            conditions.show.push('CPT Start Date');
            conditions.show.push('ART drugs');
            conditions.show.push('ART Start Date');
            conditions.show.push('HIV Care registration number');
        }
        return conditions;
    },


    'Place of Work': function (patientProgramAttributes) {
        var conditions = {
            show: [],
            hide: []
        };
        
        if (patientProgramAttributes['Place of Work'] == 'Other') {

            conditions.show.push('Place of Work-Other');
        }else
        {
            conditions.hide.push('Place of Work-Other');
        }
        return conditions;
    },

  
    'Reffered by': function (patientProgramAttributes) {
        var conditions = {
            show: [],
            hide: []
        };
        console.log(patientProgramAttributes['Reffered by']);
        if (patientProgramAttributes['Reffered by'] == 'Others(Specify below)') {

            conditions.show.push('Reffered by-Other');
        } else 
        {
         conditions.hide.push('Reffered by-Other');
        }
        return conditions;
    }
};
