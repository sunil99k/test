Bahmni.ConceptSet.FormConditions.rules = {
    'Diastolic Data' : function (formName, formFieldValues) {
        var systolic = formFieldValues['Systolic'];
        var diastolic = formFieldValues['Diastolic'];
        if (systolic || diastolic) {
            return {
                enable: ["Posture"]
            }
        } else {
            return {
                disable: ["Posture"]
            }
        }
    },
    'Systolic Data' : function (formName, formFieldValues) {
        var systolic = formFieldValues['Systolic'];
        var diastolic = formFieldValues['Diastolic'];
        if (systolic || diastolic) {
            return {
                enable: ["Posture"]
            }
        } else {
            return {
                disable: ["Posture"]
            }
        }
    },

     'under5_Cough' : function (formName, formFieldValues) {
        var Yes = formFieldValues['under5_Cough'];
        if (Yes ==  "Ans_option_yes_hindi") {
            return {
                show: ["breathingRate"]
            }
        } else {
            return {
                hide: ["breathingRate"]
            }
        }
     },

      'Strong breath' : function (formName, formFieldValues) {
        var Yes = formFieldValues['Strong breath'];
        if (Yes == "Ans_option_yes_hindi") {
            return {
                show: ["From how many days"]
            }
        } else {
            return {
                hide: ["From how many days"]
            }
        }
    },

      'Does the child have diarrhea' : function (formName, formFieldValues) {
        var Yes = formFieldValues['Does the child have diarrhea'];
        if (Yes ==  "Ans_option_yes_hindi") {
            return {
                show: ["From how many days"]
            }
        } else {
            return {
                hide: ["From how many days"]
            }
        }
    },

     'Does the child have fever' :  function (formName, formFieldValues) {
        var yes = formFieldValues['Does the child have fever'];
         if (yes ==  "Ans_option_yes_hindi") {
            return {
                show: ["From how many days"]
            }
        } else {
            return {
                hide: ["From how many days"]
            }
        }
     },



     'Malnutrition Classification' :  function (formName, formFieldValues) {
        var mal = formFieldValues['Malnutrition Classification'];
         if (mal == 'Serious Malnutrition' || mal == 'Over Malnutrition' || mal == 'Malnutrition') {
            return {
                show: ["Estimation Of Eating & Drinking Section"]
            }
        } else {
            return {
                hide: ["Estimation Of Eating & Drinking Section"]
            }
        }
     },

      'Anemia Classification' :  function (formName, formFieldValues) {
        var ane = formFieldValues['Anemia Classification'];
         if (ane == 'Severe anemia' || ane == 'Anemia') {
            return {
                show: ["Estimation Of Eating & Drinking Section"]
            }
        } else {
            return {
                hide: ["Estimation Of Eating & Drinking Section"]
            }
        }
     },

      '2MInfant_Does the baby have diarrhea' : function (formName, formFieldValues) {
        var yes = formFieldValues['2MInfant_Does the baby have diarrhea'];
        if(yes == "Ans_option_yes_hindi") {
            return {
                show: ["2MInfant_Dull or Unconscious","2MInfant_Restless and irritable","2MInfant_Blurred eyes","2MInfant_Skin"]
            }

        } else {
            return {
                hide: ["2MInfant_Dull or Unconscious","2MInfant_Restless and irritable","2MInfant_Blurred eyes","2MInfant_Skin"]
            }
        }
    },
        //----------------------------------------------------------------------
        // 2MonthInfant
        //----------------------------------------------------------------------

      '2MInfant_breastfeeding is done' :  function (formName, formFieldValues) {
        var yes = formFieldValues['2MInfant_breastfeeding is done'];
         if (yes == 'Ans_option_yes_hindi') {
            return {
                show: ["2MInfant_If yes how many times in 24 hours"]
            }
        } else {
            return {
                hide: ["2MInfant_If yes how many times in 24 hours"]
            }
        }
     },

      '2MInfant_Is anything else being fed':  function (formName, formFieldValues) {
        var yes = formFieldValues['2MInfant_Is anything else being fed'];
         if (yes == 'Ans_option_yes_hindi') {
            return {
                show: ["2MInfant_What is given for drinking","2MInfant_If yes how often"]
            }
        } else {
            return {
                hide: ["2MInfant_What is given for drinking","2MInfant_If yes how often"]
            }
        }
     },

    //--------------------------------------------------------------------------------------

     //-----------------------------------
     //ADULT-Case-Sheet
     //-----------------------------------

     
      'ADULTCaseSheet_Fever' :  function (formName, formFieldValues) {
        var fever = formFieldValues['ADULTCaseSheet_Fever'];
         if (fever == true) {
            return {
                show: ["ADULTCaseSheet_General_Duration"]
            }
        } else {
            return {
                hide: ["ADULTCaseSheet_General_Duration"]
            }
        }
     },

     'ADULTCaseSheet_Cough' :  function (formName, formFieldValues) {
        var cough = formFieldValues['ADULTCaseSheet_Cough'];
         if (cough == true) {
            return {
                show: ["ADULTCaseSheet_Paroxysmal","ADULTCaseSheet_More at night","ADULTCaseSheet_Blood in cough"]
            }
        } else {
            return {
                hide: ["ADULTCaseSheet_Paroxysmal","ADULTCaseSheet_More at night","ADULTCaseSheet_Blood in cough"]
            }
        }
     },
     'ADULTCaseSheet_Sputum' :  function (formName, formFieldValues) {
        var sputum = formFieldValues['ADULTCaseSheet_Sputum'];
         if (sputum == true) {
            return {
                show: ["ADULTCaseSheet_Colour"]
            }
        } else {
            return {
                hide: ["ADULTCaseSheet_Colour"]
            }
        }
     },
     'ADULTCaseSheet_Breathlessness' :  function (formName, formFieldValues) {
        var breath = formFieldValues['ADULTCaseSheet_Breathlessness'];
         if (breath == true) {
            return {
                show: ["ADULTCaseSheet_Breathlessness_Time"]
            }
        } else {
            return {
                hide: ["ADULTCaseSheet_Breathlessness_Time"]
            }
        }
     },
     'ADULTCaseSheet_Abdominal pain' :  function (formName, formFieldValues) {
        var pain = formFieldValues['ADULTCaseSheet_Abdominal pain'];
         if (pain == true) {
            return {
                show: ["ADULTCaseSheet_Type of pain","ADULTCaseSheet_Recurrent","ADULTCaseSheet_Location"]
            }
        } else {
            return {
                hide: ["ADULTCaseSheet_Type of pain","ADULTCaseSheet_Recurrent","ADULTCaseSheet_Location"]
            }
        }
     },
     'ADULTCaseSheet_Vomiting' :  function (formName, formFieldValues) {
        var vomit = formFieldValues['ADULTCaseSheet_Vomiting'];
         if (vomit == true) {
            return {
                show: ["ADULTCaseSheet_Blood in vomitus","ADULTCaseSheet_Projectile"]
            }
        } else {
            return {
                hide: ["ADULTCaseSheet_Blood in vomitus","ADULTCaseSheet_Projectile"]
            }
        }
     },
     'ADULTCaseSheet_CNS' :  function (formName, formFieldValues) {
        var cns = formFieldValues['ADULTCaseSheet_CNS'];
         if (cns == 'ADULTCaseSheet_CNS_Abnormal') {
            return {
                show: ["ADULTCaseSheet_oriented/ disoriented",
			"ADULTCaseSheet_Right hemiparesis",
			"ADULTCaseSheet_Left hemiparesis",
			"ADULTCaseSheet_Right cranial nerve palsy",
			"ADULTCaseSheet_Left cranial nerve palsy",
			"ADULTCaseSheet-Others"]
            }
        } else {
            return {
                hide:  ["ADULTCaseSheet_oriented/ disoriented",
                        "ADULTCaseSheet_Right hemiparesis",
                        "ADULTCaseSheet_Left hemiparesis",
                        "ADULTCaseSheet_Right cranial nerve palsy",
                        "ADULTCaseSheet_Left cranial nerve palsy",
                        "ADULTCaseSheet-Others"]

            }
        }
     },
    'ADULTCaseSheet_Respiratory_Condition' :  function (formName, formFieldValues) {
        var resp = formFieldValues['ADULTCaseSheet_Respiratory_Condition'];
         if (resp == 'ADULTCaseSheet_CNS_Abnormal') {
            return {
        	show: ["ADULTCaseSheet_Respiratory_Air entry right decreased",
			"ADULTCaseSheet_Respiratory_Air entry left decreased",
			"ADULTCaseSheet_Respiratory_Bronchial breathing Right",
			"ADULTCaseSheet_Respiratory_Bronchial breathing left",
			"ADULTCaseSheet_Respiratory_Crepitations right upper",
			"ADULTCaseSheet_Respiratory_Crepitations left upper",
			"ADULTCaseSheet_Respiratory_Crepitations right lower",
			"ADULTCaseSheet_Respiratory_Crepitations left lower"]
	    }
        } else {
            return {
                hide:  ["ADULTCaseSheet_Respiratory_Air entry right decreased",
                        "ADULTCaseSheet_Respiratory_Air entry left decreased",
                        "ADULTCaseSheet_Respiratory_Bronchial breathing Right",
                        "ADULTCaseSheet_Respiratory_Bronchial breathing left",
                        "ADULTCaseSheet_Respiratory_Crepitations right upper",
                        "ADULTCaseSheet_Respiratory_Crepitations left upper",
                        "ADULTCaseSheet_Respiratory_Crepitations right lower",
                        "ADULTCaseSheet_Respiratory_Crepitations left lower"]
            }
        }
     },
     'ADULTCaseSheet_Skin' :  function (formName, formFieldValues) {
        var skin = formFieldValues['ADULTCaseSheet_Skin'];
         if (skin == 'ADULTCaseSheet_CNS_Abnormal') {
            return {
                show: ["ADULTCaseSheet_Skin_Types"]
            }
        } else {
            return {
                hide: ["ADULTCaseSheet_Skin_Types"]
            }
        }
     }

     //-----------------------------------
    
};
