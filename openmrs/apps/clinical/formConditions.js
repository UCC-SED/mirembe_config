Bahmni.ConceptSet.FormConditions.rules = {
    'Systolic Data': function(formName, formFieldValues, patient) {

        var conditions = {
            show: [],
            hide: []
        };
        if (patient['gender'] == 'F' ) {
            conditions.show.push("Posture")
        } else {
            conditions.hide.push("Posture")
        }

        return conditions;
    },
 'HTC - Hali ya Ujauzito': function(formName, formFieldValues, patient) {
            var conditions = {
                show: [],
                hide: []
            };
            var haliYaUjauzito = "HTC - Hali ya Ujauzito";
console.log("Circular");
            if (patient['gender'] == 'F' && patient['age'] > 10) {
                conditions.show.push(haliYaUjauzito);
            } else {
                conditions.hide.push(haliYaUjauzito);
            }

            return conditions;
        },

       'Regista ya Huduma ya Upimaji na Ushauri': function(formName, formFieldValues, patient) {

            var conditions = {
                show: [],
                hide: []
            };
            console.log("Here");
            if (patient['gender'] == 'F' && patient['age'] > 10) {
                conditions.show.push("HTC - Hali ya Ujauzito")
            } else {
                conditions.hide.push("HTC - Hali ya Ujauzito")
            }

            return conditions;
        },
    'Payment Category': function(formName, formFieldValues, patient) {
        var conditions = {
            show: [],
            hide: []
        };
        var paymentCategory = formFieldValues['Payment Category'];
        var insuranceID = 'Insurance ID';
        var InsuranceType = 'Insurance Type';

        if (paymentCategory == "Insurance") {
            conditions.show.push(insuranceID);
            conditions.show.push(InsuranceType);


        } else {
            conditions.hide.push(insuranceID);
            conditions.hide.push(InsuranceType);

        }
        return conditions;
    },
    'ANC - Mimba ya ngapi': function(formName, formFieldValues, patient) {
        var conditions = {
            show: [],
            hide: []
        };
        var other = formFieldValues['ANC - Mimba ya ngapi'];
        var variable = 'ANC - Amezaa mara ngapi';
        var variable2 = 'ANC - Watoto walio hai';
        var variable3 = 'ANC - Mimba zilizoharibika';
        var variable4 = 'ANC - Miaka 10 au zaidi tokea mimba ya mwisho Data';
        var variable5 = 'ANC - Kujifungua kwa kupasuliwa Data';
        var variable6 = 'ANC - Kuzaa mtoto mfu/kifo cha mtoto mchanga (wk 1) Data';
        var variable7 = 'ANC - Kuzalishwa kwa kupasuliwa au vacum Data';
        var variable8 = 'ANC - Kutoka damu nyingi baada ya kujifungua Data';
        var variable9 = 'ANC - Kondo la nyuma kukwama Data';
        console.log(other);
        if (other > 1) {
            conditions.show.push(variable);
            conditions.show.push(variable2);
            conditions.show.push(variable3);
            conditions.show.push(variable4);
            conditions.show.push(variable5);
            conditions.show.push(variable6);
            conditions.show.push(variable7);
            conditions.show.push(variable8);
            conditions.show.push(variable9);

        } else {
            conditions.hide.push(variable);
            conditions.hide.push(variable2);
            conditions.hide.push(variable3);
            conditions.hide.push(variable4);
            conditions.hide.push(variable5);
            conditions.hide.push(variable6);
            conditions.hide.push(variable7);
            conditions.hide.push(variable8);
            conditions.hide.push(variable9);
        }
        return conditions;
    },

    'ANC - Umri wa mimba kwa wiki': function(formName, formFieldValues, patient) {
        var conditions = {
            show: [],
            hide: []
        };
        var other = formFieldValues['ANC - Umri wa mimba kwa wiki'];
        var variable = 'ANC - Kitangulizi kuanzia wiki ya 36';
        var variable2 = 'ANC - Mtoto anacheza baada ya wiki 20 Data';
        var variable3 = 'ANC - Mapigo ya moyo wa mtoto baada ya wiki 20 Data';
        var variable4 = 'ANC - Mlalo wa mtoto';
        console.log(other);
        if (other > 20) {
            conditions.show.push(variable);
            conditions.show.push(variable2);
            conditions.show.push(variable3);
        } else {
            conditions.hide.push(variable);
            conditions.hide.push(variable2);
            conditions.hide.push(variable3);
        }
        return conditions;
    },

    'ANC - Chupa imepasuka(Ndio/Hapana)': function(formName, formFieldValues, patient) {
        var conditions = {
            show: [],
            hide: []
        };
        var other = formFieldValues['ANC - Chupa imepasuka(Ndio/Hapana)'];
        var variable = 'ANC - Chupa imepasuka(tarehe)';
        console.log(other);
        if (other == 'ANC - Ndiyo') {
            conditions.show.push(variable)
        } else {
            conditions.hide.push(variable)
        }
        return conditions;
    },

    'ANC - Njia ya kujifungua': function(formName, formFieldValues, patient) {
        var conditions = {
            show: [],
            hide: []
        };
        var other = formFieldValues['ANC - Njia ya kujifungua'];
        var variable = 'ANC - Kama amepasuliwa: Sababu ya kupasuliwa';
        console.log(other);
        if (other == 'ANC - Caesarian section') {
            conditions.show.push(variable)
        } else {
            conditions.hide.push(variable)
        }
        return conditions;
    },

    'ANC - Msamba': function(formName, formFieldValues, patient) {
        var conditions = {
            show: [],
            hide: []
        };
        var other = formFieldValues['ANC - Msamba'];
        var variable = 'ANC - Maelezo ya aliyeshona msamba';
        console.log(other);
        if (other == 'ANC - Ulichanwa (Episiotomy)') {
            conditions.show.push(variable)
        } else {
            conditions.hide.push(variable)
        }
        return conditions;
    },

    'ANC - PMTCT/ART': function(formName, formFieldValues, patient) {
        var conditions = {
            show: [],
            hide: []
        };
        var other = formFieldValues['ANC - PMTCT/ART'];
        var variable1 = 'ANC - Dawa: (ART)';
        var variable2 = 'ANC - Uhusiano na huduma ya CTC';
        var variable3 = 'ANC - Ushauri juu ya lishe ya mtoto';
        var variable4 = 'ANC - Ufuasi (Adhere)';
        console.log(other);
        if (other == 'ANC - 1') {
            conditions.show.push(variable1);
            conditions.show.push(variable2);
            conditions.show.push(variable3);
            conditions.show.push(variable4);
        } else {
            conditions.hide.push(variable1);
            conditions.hide.push(variable2);
            conditions.hide.push(variable3);
            conditions.hide.push(variable4);
        }
        return conditions;
    },

    'Tests and Examinations': function(formName, formFieldValues, patient) {
        var conditions = {
            show: [],
            hide: []
        };
        var cd4Percentage = "CTC - CD4 Percentage";
        var cd4Count = "CTC - CD4 Count"
        if (patient['age'] > 15) {
            conditions.show.push(cd4Count);
            conditions.hide.push(cd4Percentage);

        } else {
            conditions.show.push(cd4Percentage);
            conditions.hide.push(cd4Count);


        }

        return conditions;
    },



    'HIV Vitals': function(formName, formFieldValues, patient) { //'Chief Complaint Data' concept when edited, triggers this function
        var conditions = {
            show: [],
            hide: []
        };
        var height = formFieldValues['HEIGHT'];
        var variable = "HEIGHT";
        if (patient['age'] > 15) {

            conditions.hide.push(variable)
        } else {
            conditions.show.push(variable)
        }
        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },
    'Patient refered from': function(formName, formFieldValues, patient) { //'Chief Complaint Data' concept when edited, triggers this function
        var conditions = {
            show: [],
            hide: []
        };
        var other = formFieldValues['Patient refered from'];
        var variable = "Other Referred from";
        if (other == "Patient refered from, Other") {
            conditions.show.push(variable)
        } else {
            conditions.hide.push(variable)
        }
        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },
    'Patient Joined Community Support Organisation': function(formName, formFieldValues, patient) {
        var conditions = {
            show: [],
            hide: []
        };
        var name = "Name of Community Support Organisation";
        var conditionConcept = formFieldValues['Patient Joined Community Support Organisation'];
        if (conditionConcept) {
            conditions.show.push(name)
        } else {
            conditions.hide.push(name)
        }
        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },
    'Patient Referred From': function(formName, formFieldValues, patient) {
        var conditions = {
            show: [],
            hide: []
        };
        var other = "Patient Referred From - Other Specify";
        var conditionConcept = formFieldValues['Patient Referred From'];
        if (conditionConcept == "Patient Referred From - Other") {
            conditions.show.push(other)
        } else {
            conditions.hide.push(other)
        }
        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },




    'ANC, HIV Testing': function(formName, formFieldValues, patient) {
        var conditions = {
            show: [],
            hide: []
        };
        var other = "ANC, HIV Test Date";
        var HIVTestResult = "ANC, HIV Test Result";
        var conditionConcept = formFieldValues['ANC, HIV Testing'];
        if (conditionConcept) {
            conditions.show.push(other)
        } else {
            conditions.hide.push(HIVTestResult)
        }
        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },



    'HTC, Pregnancy Status': function(formName, formFieldValues, patient) {
        var conditions = {
            show: [],
            hide: []
        };
        var edd = "HCT, EDD Date";
        var anc = "HCT, ANC Number";
        var family_plan = "Family Planning Template";
        var conditionConcept = formFieldValues['HTC, Pregnancy Status'];
        if (conditionConcept == "Yes") {
            conditions.show.push(edd)
            conditions.show.push(anc)
            conditions.hide.push(family_plan)

        } else {
            conditions.hide.push(edd)
            conditions.hide.push(anc)
            conditions.show.push(family_plan)
        }
        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },
    'ART Adherence Status Poor': function(formName, formFieldValues, patient) {
        var conditions = {
            show: [],
            hide: []
        };
        var other = "ART Adherence Status, Other Specify";
        var conditionConcept = formFieldValues['ART Adherence Status Poor'];
        if (conditionConcept == "ART Adherence Status, Other") {
            conditions.show.push(other)
        } else {
            conditions.hide.push(other)
        }
        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },
    'CTC - Pregnant Y/N': function(formName, formFieldValues) {
        var edd = "CTC - EDD";
        var ancNumber = "CTC - ANC Number";
        var familyPlanning = "CTC - Family Planning Template";


        var conditions = {
            show: [],
            hide: []
        };

        var conditionConcept = formFieldValues['CTC - Pregnant Y/N'];

        console.log(conditionConcept);
        if (conditionConcept) {

            return {
                show: [edd, ancNumber],
                hide: [familyPlanning]
            }

        } else {
            return {
                hide: [edd, ancNumber],
                show: [familyPlanning]
            }
        }
    },
    'CTC - Function Reproductive': function(formName, formFieldValues, patient) {
        console.log(patient);
        var conditions = {
            show: [],
            hide: []
        };
        if (patient['gender'] == 'F' && patient['age'] > 10) {
            conditions.show.push("CTC - Function Reproductive");

        } else {
            conditions.hide.push("CTC - Function Reproductive");


        }

        return conditions;
    },
    'CTC - ARV Status': function(formName, formFieldValues) {



        var conditions = {
            show: [],
            hide: []
        };

        var arvStatus = formFieldValues['CTC - ARV Status'];

        var arvNotStarted = "CTC - ARV Status, Not started ARV";
        var startARV = "CTC - ARV Status, Start ARV";
        var continueARV = "CTC - ARV Status, Continue ARV";
        var changeARV = "Change";
        var stopARV = "CTC - ARV Status, Stop";
        var restartARV = "CTC - ARV Status, Restart";
        var substitutionARV = "CTC - ARV Substitution";
        var switchTo2ndLine = "Switch to 2nd line";
        var switchTo3rdLine = "Switch to 3rd line";


         console.log(arvStatus);

        var reasonNoStart = "CTC - ARV Reason - No Start";
        var reasonStartARV = "CTC - ARV Start";
        var reasonStopARV = "CTC - ARV Reason - Stop";
        var reasonRestartARV = "CTC - ARV Reason - Restart";
        var reasonSubARV = "CTC - ARV Reasons - for Substitution";
        var reasonRegimenChange = "CTC - ARV Reason - Reason for Regimen Switch";
        var specifyOtherReason = "CTC - ARV Specify Other Reason";


        if (arvStatus == arvNotStarted) {

            conditions.show.push(reasonNoStart);
            conditions.hide.push(reasonStartARV);
            conditions.hide.push(reasonStopARV);
            conditions.hide.push(reasonRestartARV);
            conditions.hide.push(reasonSubARV);
            conditions.hide.push(reasonRegimenChange);
             conditions.show.push(specifyOtherReason);


        } else if (arvStatus == startARV) {
            conditions.show.push(reasonStartARV);
            conditions.hide.push(reasonNoStart);
            conditions.hide.push(reasonStopARV);
            conditions.hide.push(reasonRestartARV);
            conditions.hide.push(reasonSubARV);
            conditions.hide.push(reasonRegimenChange);
             conditions.show.push(specifyOtherReason);

        } else if (arvStatus == continueARV) {
            conditions.hide.push(reasonNoStart);
            conditions.hide.push(reasonStartARV);
            conditions.hide.push(reasonStopARV);
            conditions.hide.push(reasonRestartARV);
            conditions.hide.push(reasonSubARV);
            conditions.hide.push(reasonRegimenChange);
            conditions.hide.push(specifyOtherReason);

        } else if (arvStatus == stopARV) {


            conditions.show.push(reasonStopARV);
            conditions.hide.push(reasonNoStart);
            conditions.hide.push(reasonRestartARV);
            conditions.hide.push(reasonSubARV);
            conditions.hide.push(reasonRegimenChange);
             conditions.show.push(specifyOtherReason);

        } else if (arvStatus == restartARV) {
            conditions.show.push(reasonRestartARV);
            conditions.hide.push(reasonNoStart);
            conditions.hide.push(reasonStopARV);
            conditions.hide.push(reasonSubARV);
            conditions.hide.push(reasonRegimenChange);
            conditions.show.push(specifyOtherReason);

        } else if (arvStatus == substitutionARV) {
            conditions.show.push(reasonSubARV);
            conditions.hide.push(reasonNoStart);
            conditions.hide.push(reasonStopARV);
            conditions.hide.push(reasonRestartARV);
            conditions.hide.push(reasonRegimenChange);
             conditions.show.push(specifyOtherReason);

        } else if (arvStatus == switchTo2ndLine || arvStatus == switchTo3rdLine) {
            conditions.show.push(reasonRegimenChange);
            conditions.hide.push(reasonNoStart);
            conditions.hide.push(reasonStopARV);
            conditions.hide.push(reasonRestartARV);
            conditions.hide.push(reasonSubARV);
             conditions.show.push(specifyOtherReason);


        } else {

            conditions.hide.push(reasonNoStart);
            conditions.hide.push(reasonStartARV);
            conditions.hide.push(reasonStopARV);
            conditions.hide.push(reasonRestartARV);
            conditions.hide.push(reasonSubARV);
            conditions.hide.push(reasonRegimenChange);
            conditions.hide.push(specifyOtherReason);
        }
        return conditions; //Return object SHOULD be a map with 'enable' and 'disable' arrays having the concept names
    },
    'ARV Reason - No Start': function(formName, formFieldValues) {

        var conditions = {
            show: [],
            hide: []
        };
        var arvReason = formFieldValues['ARV Reason - No Start'];

        if (arvReason == "99 - Patient fulfils criteria but does not start for other reason") {
            conditions.show.push("ARV Specify other reason");

        } else {
            conditions.hide.push("ARV Specify other reason");
        }
        return conditions; //Return object SHOULD be a map with 'enable' and 'disable' arrays having the concept names
    },
    'CTC - ARV Adherence Status': function(formName, formFieldValues) {
        var conditions = {
            show: [],
            hide: []
        };

        var arvAdherencestatus = formFieldValues['CTC - ARV Adherence Status'];
  console.log(arvAdherencestatus);

        if (arvAdherencestatus == "2 P(Poor)- Less than 95% of adherence") {
            conditions.show.push("CTC - Reasons for Poor ARV Adherence");

        } else {
            conditions.hide.push("CTC - Reasons for Poor ARV Adherence");
        }
        return conditions; //Return object SHOULD be a map with 'enable' and 'disable' arrays having the concept names
    },
    'CTC - Reasons for Poor ARV Adherence': function(formName, formFieldValues) {
        var conditions = {
            show: [],
            hide: []
        };

        var poorARVAdherence = formFieldValues['CTC - Reasons for Poor ARV Adherence'];

        if (poorARVAdherence == "13 - Other (Specify)") {
            conditions.show.push("CTC - Other Reasons for Poor ARV Adherence");

        } else {
            conditions.hide.push("CTC - Other Reasons for Poor ARV Adherence");
        }
        return conditions; //Return object SHOULD be a map with 'enable' and 'disable' arrays having the concept names
    },
    'Referral to': function(formName, formFieldValues) {
        var conditions = {
            show: [],
            hide: []
        };
        var referralTo = formFieldValues['Referral to'];

        if (referralTo == "10 - Other") {
            conditions.show.push("Other Referral to");

        } else {
            conditions.hide.push("Other Referral to");
        }
        return conditions; //Return object SHOULD be a map with 'enable' and 'disable' arrays having the concept names
    },


    'ARV Regimens - First Line Adult': function(formName, formFieldValues) {
        var firstLineAdult = "ARV Regimens - First Line Adult";
        var secondLineAdult = "ARV Regimens - Second Line Adult";
        var firstLinePediatric = "ARV Regimens - First Line Pediatric";
        var secondLinePediatric = "ARV Regimens - Second Line Pediatric";
        var conditionConcept = formFieldValues['ARV Regimens - First Line Adult'];
        if (conditionConcept != null) {
            return {
                disable: [secondLineAdult, firstLinePediatric, secondLinePediatric]
            }
        } else {
            return {
                enable: [secondLineAdult, firstLinePediatric, secondLinePediatric]
            }
        }
    },
    'TB - Reason for Examination': function(formName, formFieldValues, patient) {
        var conditions = {
            show: [],
            hide: []
        };
        var examinationReason = formFieldValues['TB - Reason for Examination'];
        var diagnosis = "TB - Reason for Examination, Diagnosis Option";
        var followup = "TB - Reason for Examination, Follow-up, Month";

        console.log(examinationReason);

        if (examinationReason == "TB - Reason for Examination, Diagnosis") {
            conditions.show.push(diagnosis);
            conditions.hide.push(followup);

        } else {
            conditions.show.push(followup);
            conditions.hide.push(diagnosis);
        }
        return conditions; //Return object SHOULD be a map with 'enable' and 'disable' arrays having the concept names
    },




    'HIV Vitals': function(formName, formFieldValues, patient) {
        //'Chief Complaint Data' concept when edited, triggers this function
        var conditions = {
            show: [],
            hide: []
        };
        var height = formFieldValues['HEIGHT'];
        var variable = "HEIGHT";
        if (patient['age'] > 15) {

            conditions.hide.push(variable)
        } else {
            conditions.show.push(variable)
        }
        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },
    'TB - Reffered by': function(formName, formFieldValues, patient) {
        var conditions = {
            show: [],
            hide: []
        };
        var other = formFieldValues['TB - Reffered by'];
        var variable = "TB - Specify";
        if (other == "Others(Specify below)") {
            conditions.show.push(variable)
        } else {
            conditions.hide.push(variable)
        }
        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },
    'TB - CPT': function(formName, formFieldValues, patient) {
        //'Chief Complaint Data' concept when edited, triggers this function
        var conditions = {
            show: [],
            hide: []
        };
        var other = formFieldValues['TB - CPT'];
        var variable = "TB - CPT - Start Date";
        if (other == "TB - CPT - Yes") {
            conditions.show.push(variable)
        } else {
            conditions.hide.push(variable)
        }
        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },
    'TB - ART drugs': function(formName, formFieldValues, patient) {
        //'Chief Complaint Data' concept when edited, triggers this function
        var conditions = {
            show: [],
            hide: []
        };
        var other = formFieldValues['TB - ART drugs'];
        var variable = "TB - ART - Start Date";
        if (other == "TB - ART - Yes") {
            conditions.show.push(variable)
        } else {
            conditions.hide.push(variable)
        }
        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },

    'TB - Classification by history of treatment': function(formName, formFieldValues, patient) {
        //'Chief Complaint Data' concept when edited, triggers this function
        var conditions = {
            show: [],
            hide: []
        };
        var other = formFieldValues['TB - Classification by history of treatment'];
        var variable = "TB - Classification by history - Specify";
        if (other == "Others(Specify below)") {
            conditions.show.push(variable)
        } else {
            conditions.hide.push(variable)
        }
        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },
    'Patient refered from': function(formName, formFieldValues, patient) { //'Chief Complaint Data' concept when edited, triggers this function
        var conditions = {
            show: [],
            hide: []
        };
        var other = formFieldValues['Patient refered from'];
        var variable = "Other Referred from";
        if (other == "Patient refered from, Other") {
            conditions.show.push(variable)
        } else {
            conditions.hide.push(variable)
        }
        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },
    'Patient Joined Community Support Organisation': function(formName, formFieldValues, patient) {
        var conditions = {
            show: [],
            hide: []
        };
        var name = "Name of Community Support Organisation";
        var conditionConcept = formFieldValues['Patient Joined Community Support Organisation'];
        if (conditionConcept) {
            conditions.show.push(name)
        } else {
            conditions.hide.push(name)
        }
        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },
    'Patient Referred From': function(formName, formFieldValues, patient) {
        var conditions = {
            show: [],
            hide: []
        };
        var other = "Patient Referred From - Other Specify";
        var conditionConcept = formFieldValues['Patient Referred From'];
        if (conditionConcept == "Patient Referred From - Other") {
            conditions.show.push(other)
        } else {
            conditions.hide.push(other)
        }
        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },
    'HTC, Pregnancy Status': function(formName, formFieldValues, patient) {
        var conditions = {
            show: [],
            hide: []
        };
        var edd = "HCT, EDD Date";
        var anc = "HCT, ANC Number";
        var family_plan = "Family Planning Template";
        var conditionConcept = formFieldValues['HTC, Pregnancy Status'];
        if (conditionConcept == "Yes") {
            conditions.show.push(edd)
            conditions.show.push(anc)
            conditions.hide.push(family_plan)

        } else {
            conditions.hide.push(edd)
            conditions.hide.push(anc)
            conditions.show.push(family_plan)
        }
        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },
    'TB - list 5 years household - Screened': function(formName, formFieldValues, patient) {
        var conditions = {
            show: [],
            hide: []
        };
        var tb = "TB - list 5 years household - outcome";
        if (formFieldValues['TB - list 5 years household - Screened']) {

            conditions.show.push(tb);
        } else {
            conditions.hide.push(tb);
        }

        return conditions;
    },
    'TB - list 5 years household - outcome': function(formName, formFieldValues, patient) {
        var conditions = {
            show: [],
            hide: []
        };
        var tb = "TB - IPT";
        if (formFieldValues['TB - list 5 years household - outcome'] == 'No TB') {

            conditions.show.push(tb);
        } else {
            conditions.hide.push(tb);
        }

        return conditions;
    },
    'TB - IPT': function(formName, formFieldValues, patient) {
        var conditions = {
            show: [],
            hide: []
        };
        var REJESTA = "TB - REJESTA YA TIBA KINGA YA KIFUA KIKUU";
        if (formFieldValues['TB - IPT']) {

            conditions.show.push(REJESTA);

        } else {
            conditions.hide.push(REJESTA);
        }

        return conditions;
    },
    'Breast feeding': function(formName, formFieldValues, patient) {
        var conditions = {
            show: [],
            hide: []
        };
        var name = "Breast feeding";
        if (patient['gender'] == 'F') {
            conditions.show.push("CTC - Why Eligible - Pregnancy");
            conditions.show.push("Breast feeding");
        } else {
            conditions.hide.push("CTC - Why Eligible - Pregnancy");
            conditions.hide.push("Breast feeding");
        }

        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },
    'HTC - Amekubali na Kupimwa hali ya Uambukizi wa VVU': function(formName, formFieldValues, patient) {
        var conditions = {
            show: [],
            hide: []
        };
        var validation = "HTC - Amekubali na Kupimwa hali ya Uambukizi wa VVU";
        var majibu = "HTC - Majibu ya hali ya Uambukizi wa VVU";
        if (validation) {
            conditions.show.push(majibu)
        } else {
            conditions.hide.push(majibu)
        }

        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },

    'exp-infant - Infant NVP at birth': function(formName, formFieldValues, patient) {
        var conditions = {
            show: [],
            hide: []
        };
        var ans = formFieldValues['exp-infant - Infact NVP at birth'];
        var variable = "exp-infant - Number of Days Dispensed";
        if (ans) {
            conditions.show.push(variable)
        } else {
            conditions.hide.push(variable)
        }
        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },
    'HTC - Kuchunguzwa Kifua Kikuu': function(formName, formFieldValues, patient) {
        var conditions = {
            show: [],
            hide: []
        };
        var validation = "HTC - Kuchunguzwa Kifua Kikuu";
        var majibu = "HTC - Hali ya Uambukizi wa Kifua Kikuu";

        if (validation) {
            conditions.show.push(majibu)
        } else {
            conditions.hide.push(majibu)
        }

        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },

    'Exposed Infant - CTX(Yes/No)': function(formName, formFieldValues, patient) {
        var conditions = {
            show: [],
            hide: []
        };
        var validation = formFieldValues['Exposed Infant - CTX(Yes/No)'];
        var majibu = "Exposed Infant - CTX Yes";
        var noOfDays = "Exposed Infant - CTX No of Days Dispensed";

        console.log(validation);
        if (validation == majibu) {
            conditions.show.push(noOfDays)
        } else {
            conditions.hide.push(noOfDays)
        }

        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },
    //conditions for Transfer/Referrals
    'Transfer/Referral': function(formName, formFieldValues, patient) {
        var conditions = {
            show: [],
            hide: []
        };
        var transferType = formFieldValues['Transfer/Referral'];
        var type_referral = "Type of Referral";
        var name_facility = "Name of Facility To be Transfer";
        var Referral_Programs = "Referral Programs";
        var Facility_District = "Facility District";
        var curent_location = "Makazi ya Sasa";
        var new_location = "Makazi Mapya";

        var address ="Address of Referred Facility";
        var address2 ="Address of Referred Facility 2";
        if(transferType == "Reffer Out") {
			conditions.show.push(address2)
			conditions.show.push(address)
			conditions.show.push(name_facility)
            conditions.hide.push(Referral_Programs)
             conditions.show.push(Facility_District)
            conditions.hide.push(curent_location)
            conditions.show.push(type_referral);
            conditions.hide.push(new_location)

        } else if(transferType == "Transfer Within")
        {
			conditions.hide.push(address2)
			conditions.hide.push(address)
			conditions.hide.push(name_facility)
            conditions.show.push(Referral_Programs)
            conditions.hide.push(type_referral);
             conditions.hide.push(Facility_District)
            conditions.hide.push(curent_location)
            conditions.hide.push(new_location)

        }
        
        else {
			conditions.hide.push(address2)
			conditions.hide.push(address)
			conditions.hide.push(name_facility)
          conditions.hide.push(type_referral);
            conditions.hide.push(Referral_Programs)
            conditions.hide.push(Facility_District)
            conditions.hide.push(curent_location)
            conditions.hide.push(new_location)
        }
        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },


    'TB - Request and Report, Previously Treated': function(formName, formFieldValues, patient) {
        var conditions = {
            show: [],
            hide: []
        };
        var previousTreated = formFieldValues['TB - Request and Report, Previously Treated'];
        var specimentType = "TB - Previous Treated";
        var testRequested = "TB - Test Requested";
        if (previousTreated) {
            conditions.show.push(specimentType)
            conditions.show.push(testRequested)
        } else {
            conditions.hide.push(specimentType)
            conditions.hide.push(testRequested)
        }
        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },

    'TB - DOT - Phase Type': function(formName, formFieldValues, patient) {
        var conditions = {
            show: [],
            hide: []
        };
        var phaseType = formFieldValues['TB - DOT - Phase Type'];
        var RHZE = "TB - DOT - RHZE";
        var RH = "TB - DOT - RH";
        var S = "TB - DOT - S(Streptomycin)";
        var RETRRHZE = "TB - DOT - RETR - RHZE";
        var RHE = "TB - DOT - RHE";
        var RHZ = "TB - DOT - Children - RHZ";
        var E = "TB - DOT - Children - E";
        var RH = "TB - DOT - RH";

        console.log(phaseType);
        if (phaseType == "Intensive Phase") {
            conditions.show.push(RHZE)
            conditions.show.push(S)

            conditions.show.push(E)



            conditions.hide.push(RH)
            conditions.hide.push(RHE)


        } else if (phaseType == "Continuation Phase") {

            conditions.show.push(RH)
            conditions.show.push(RHZ)

            conditions.hide.push(RHZE)
            conditions.hide.push(S)

            conditions.hide.push(E)

        } else {
            conditions.hide.push(RHZE)
            conditions.hide.push(S)
            conditions.hide.push(RH)
            conditions.hide.push(RHE)
            conditions.hide.push(E)
            conditions.hide.push(RHZ)
        }
        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },

    'TB - Medicine Option': function(formName, formFieldValues, patient) {
        var conditions = {
            show: [],
            hide: []
        };
        var phaseType = formFieldValues['TB - Medicine Option'];

        var NewCase = "TB - DOT - New Case";
        var Retreatment = "Retreatment";
        var Children = "TB - DOT - Children";

        var NewCaseSection = "TB - New Case";
        var RetreatmentSection = "TB - Retreatment";
        var ChildrenSection = "TB - Children";

        console.log(phaseType);

        switch (phaseType) {
            case NewCaseSection:
                conditions.show.push(NewCase);
                conditions.hide.push(Retreatment);
                conditions.hide.push(Children);
                break;
            case RetreatmentSection:
                conditions.hide.push(NewCase);
                conditions.show.push(Retreatment);
                conditions.hide.push(Children);
                break;
            case ChildrenSection:
                conditions.hide.push(NewCase);
                conditions.hide.push(Retreatment);
                conditions.show.push(Children);
                break;
            default:
                conditions.hide.push(NewCase)
                conditions.hide.push(Retreatment)
                conditions.hide.push(Children)

        }


        return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
    },

         'HTC - Amekubali na Kupimwa hali ya Uambukizi wa VVU': function(formName, formFieldValues, patient) {
             var conditions = {
                 show: [],
                 hide: []
             };
             var amekubaliKupimaVVU = formFieldValues['HTC - Amekubali na Kupimwa hali ya Uambukizi wa VVU'];

             var haliYaUambukizi = "HTC - Majibu ya hali ya Uambukizi wa VVU";
             var kushirikishaMajibu ="HTC - Kushirikisha Majibu";

             console.log(amekubaliKupimaVVU);

 if(amekubaliKupimaVVU=="HTC - Ndiyo")
 {
 conditions.show.push(haliYaUambukizi);
 conditions.show.push(kushirikishaMajibu);
 }else
 {
 conditions.hide.push(haliYaUambukizi);
 conditions.hide.push(kushirikishaMajibu);
 }


             return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
         },

          'HTC - Kuchunguzwa Kifua Kikuu': function(formName, formFieldValues, patient) {
                      var conditions = {
                          show: [],
                          hide: []
                      };
                      var amekubaliKupimaKKU = formFieldValues['HTC - Kuchunguzwa Kifua Kikuu'];

                      var haliYaUambukizi = "HTC - Hali ya Uambukizi wa Kifua Kikuu";




          if(amekubaliKupimaKKU=="HTC - Ndiyo")
          {
          conditions.show.push(haliYaUambukizi);

          }else
          {
          conditions.hide.push(haliYaUambukizi);

          }


                      return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
                  },

          'HTC - Sampuli imepelekwa kwa ajili ya uhakiki wa ubora': function(formName, formFieldValues, patient) {
                      var conditions = {
                          show: [],
                          hide: []
                      };
                      var uhakikiUbora = formFieldValues['HTC - Sampuli imepelekwa kwa ajili ya uhakiki wa ubora'];

                      var matokeo = "HTC - Matokeo ya uhakiki wa ubora";




          if(uhakikiUbora)
          {
          conditions.show.push(matokeo);

          }else
          {
          conditions.hide.push(matokeo);

          }


                      return conditions; //Return object SHOULD be a map with 'show' and 'hide' arrays having the concept names
                  }

};
