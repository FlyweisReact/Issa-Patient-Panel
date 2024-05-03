import React, { useEffect, useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import formupload from "../../img/formupload.png";
import { user_detail, Resident_form, Resident_form_get } from "../../Api_Collection/Api";
// import AutosizeInput from "react-input-autosize";
import SingInUpdateModel from "../Modal/SingInUpdateModel";
import Draftinmodel from "../Modal/Draftinmodel";
import { useReactToPrint } from "react-to-print";
import { AiFillDelete } from "react-icons/ai";
import Select from "react-select";
import AutoSize from "../AutoSize/AutoSize";
import Loader from "../../Pages/LandingPage/Loader";

const ResidentIntakes = () => {
  const [loading,setLoading]=useState("");
  const [filedForm,setFiledForm]=useState("");

  const navigate = useNavigate();
  //section 1
  const componentRef1 = React.useRef();
  const handlePrint1 = useReactToPrint({
    content: () => componentRef1.current,
  });
  //section 2
  const componentRef2 = React.useRef();
  const handlePrint2 = useReactToPrint({
    content: () => componentRef2.current,
  });
  //section 3
  const componentRef3 = React.useRef();
  const handlePrint3 = useReactToPrint({
    content: () => componentRef3.current,
  });
  //section 4
  const componentRef4 = React.useRef();
  const handlePrint4 = useReactToPrint({
    content: () => componentRef4.current,
  });
  //section 5
  const componentRef5 = React.useRef();
  const handlePrint5 = useReactToPrint({
    content: () => componentRef5.current,
  });
  //section 6
  const componentRef6 = React.useRef();
  const handlePrint6 = useReactToPrint({
    content: () => componentRef6.current,
  });
  //section 7
  const componentRef7 = React.useRef();
  const handlePrint7 = useReactToPrint({
    content: () => componentRef7.current,
  });
  //section 8
  const componentRef8 = React.useRef();
  const handlePrint8 = useReactToPrint({
    content: () => componentRef8.current,
  });
  //section 9
  const componentRef9 = React.useRef();
  const handlePrint9 = useReactToPrint({
    content: () => componentRef9.current,
  });

  //handle print data
  const handlePrintUpdate1 = () => {
    var hidePrint = document.getElementsByClassName("hidePrint");
    var formheading1=document.getElementsByClassName("formheading1-hide")
    // Iterate through each element with the specified class
    var formsheading2=document.getElementsByClassName("formsheading2");
    var signatureRightAndSide=document.getElementsByClassName("file-upload-box");
    var increaseWidth=document.getElementsByClassName("increase-print-width");

            // hide bottom
            var form_field_gender = document.getElementsByClassName("form-field-child");
            var form_field_single_update = document.getElementsByClassName("form-field-single-update");

    for (var i = 0; i < hidePrint.length; i++) {
      hidePrint[i].style.display = "none";
    }

    for (let i = 0; i < signatureRightAndSide.length; i++) {
      signatureRightAndSide[i].style.justifyContent = "right";
    }

    for (let i = 0; i < formheading1.length; i++) {
      formheading1[i].style.display = "block";
      formheading1[i].style.marginTop = "1rem";
    }

    for (let i = 0; i < increaseWidth.length; i++) {
      increaseWidth[i].style.width="80%";
      increaseWidth[i].style.margin="auto";
    }

    
    for (let i = 0; i < formsheading2.length; i++) {
      formsheading2[i].style.backgroundColor="white"
    }

        // hode bottom
        for (let i = 0; i < form_field_gender.length; i++) {
          var inputs = form_field_gender[i].getElementsByTagName("input");
          for (let j = 0; j < inputs.length; j++) {
              inputs[j].style.borderBottom = "none";
          }
      }
    
      for (let i = 0; i < form_field_single_update.length; i++) {
        var inputs = form_field_single_update[i].getElementsByTagName("input");
        for (let j = 0; j < inputs.length; j++) {
            inputs[j].style.borderBottom = "none";
        }
    }

    handlePrint1();

    setTimeout(() => {
      for (var i = 0; i < hidePrint.length; i++) {
        hidePrint[i].style.display = "flex";
      }


      for (let i = 0; i < signatureRightAndSide.length; i++) {
        signatureRightAndSide[i].style.justifyContent = "space-between";
      }

      for (let i = 0; i < formheading1.length; i++) {
        formheading1[i].style.display = "none";
      }

      for (let i = 0; i < formsheading2.length; i++) {
        formsheading2[i].style.backgroundColor="#1a9fb2"
      }

      for (let i = 0; i < increaseWidth.length; i++) {
        increaseWidth[i].style.width="100%"
      }

       // hide bottom
       for (let i = 0; i < form_field_gender.length; i++) {
        var inputs = form_field_gender[i].getElementsByTagName("input");
        for (let j = 0; j < inputs.length; j++) {
            inputs[j].style.borderBottom = "1px solid black";
        }
    }

    for (let i = 0; i < form_field_single_update.length; i++) {
      var inputs = form_field_single_update[i].getElementsByTagName("input");
      for (let j = 0; j < inputs.length; j++) {
          inputs[j].style.borderBottom = "1px solid black";
      }
  }

  
    }, 500);
  };

  const handlePrintUpdate2 = () => {
    var hidePrint = document.getElementsByClassName("hidePrint");
    var addButton= document.getElementsByClassName("addButton");
    var signatureRightAndSide=document.getElementsByClassName("file-upload-box");
    var increaseWidth=document.getElementsByClassName("increase-print-width");
   
     // hide bottom
     var form_field_gender = document.getElementsByClassName("form-field-child");
     var form_field_single_update = document.getElementsByClassName("form-field-single-update");


    // Iterate through each element with the specified class
    for (var i = 0; i < hidePrint.length; i++) {
      hidePrint[i].style.display = "none";
    }

    
    for (var i = 0; i < addButton.length; i++) {
      addButton[i].style.display = "none";
    }

    for (let i = 0; i < signatureRightAndSide.length; i++) {
      signatureRightAndSide[i].style.justifyContent = "right";
    }

    for (let i = 0; i < increaseWidth.length; i++) {
      increaseWidth[i].style.width="80%";
      increaseWidth[i].style.margin="auto";
    }

       // hode bottom
       for (let i = 0; i < form_field_gender.length; i++) {
        var inputs = form_field_gender[i].getElementsByTagName("input");
        for (let j = 0; j < inputs.length; j++) {
            inputs[j].style.borderBottom = "none";
        }
    }
  
    for (let i = 0; i < form_field_single_update.length; i++) {
      var inputs = form_field_single_update[i].getElementsByTagName("input");
      for (let j = 0; j < inputs.length; j++) {
          inputs[j].style.borderBottom = "none";
      }
  }




    handlePrint2();
    // Use setTimeout to show the elements after a delay (adjust the timeout as needed)
    setTimeout(() => {
      for (var i = 0; i < hidePrint.length; i++) {
        hidePrint[i].style.display = "flex";
      }

      for (var i = 0; i < addButton.length; i++) {
        addButton[i].style.display = "flex";
        addButton[i].style.justifyContent = "center";
      }

      for (let i = 0; i < signatureRightAndSide.length; i++) {
        signatureRightAndSide[i].style.justifyContent = "space-between";
      }

      for (let i = 0; i < increaseWidth.length; i++) {
        increaseWidth[i].style.width="100%"
      }

         // hide bottom
         for (let i = 0; i < form_field_gender.length; i++) {
          var inputs = form_field_gender[i].getElementsByTagName("input");
          for (let j = 0; j < inputs.length; j++) {
              inputs[j].style.borderBottom = "1px solid black";
          }
      }
  
      for (let i = 0; i < form_field_single_update.length; i++) {
        var inputs = form_field_single_update[i].getElementsByTagName("input");
        for (let j = 0; j < inputs.length; j++) {
            inputs[j].style.borderBottom = "1px solid black";
        }
    }

    }, 1000);
  };

  const handlePrintUpdate3 = () => {
    var elements = document.getElementsByClassName("hidePrint");
    var signatureRightAndSide=document.getElementsByClassName("file-upload-box");
    var increaseWidth=document.getElementsByClassName("increase-print-width");

        // hide bottom
        var form_field_gender = document.getElementsByClassName("form-field-child");
        var form_field_single_update = document.getElementsByClassName("form-field-single-update");

    // Iterate through each element with the specified class
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = "none";
    }

    for (let i = 0; i < signatureRightAndSide.length; i++) {
      signatureRightAndSide[i].style.justifyContent = "right";
    }
    for (let i = 0; i < increaseWidth.length; i++) {
      increaseWidth[i].style.width="80%";
      increaseWidth[i].style.margin="auto";
    }

          // hode bottom
          for (let i = 0; i < form_field_gender.length; i++) {
            var inputs = form_field_gender[i].getElementsByTagName("input");
            for (let j = 0; j < inputs.length; j++) {
                inputs[j].style.borderBottom = "none";
            }
        }
      
        for (let i = 0; i < form_field_single_update.length; i++) {
          var inputs = form_field_single_update[i].getElementsByTagName("input");
          for (let j = 0; j < inputs.length; j++) {
              inputs[j].style.borderBottom = "none";
          }
      }
    handlePrint3();
    // Use setTimeout to show the elements after a delay (adjust the timeout as needed)
    setTimeout(() => {
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "flex";
      }

      for (let i = 0; i < signatureRightAndSide.length; i++) {
        signatureRightAndSide[i].style.justifyContent = "space-between";
      }
      for (let i = 0; i < increaseWidth.length; i++) {
        increaseWidth[i].style.width="100%"
      }

         // hide bottom
         for (let i = 0; i < form_field_gender.length; i++) {
          var inputs = form_field_gender[i].getElementsByTagName("input");
          for (let j = 0; j < inputs.length; j++) {
              inputs[j].style.borderBottom = "1px solid black";
          }
      }
  
      for (let i = 0; i < form_field_single_update.length; i++) {
        var inputs = form_field_single_update[i].getElementsByTagName("input");
        for (let j = 0; j < inputs.length; j++) {
            inputs[j].style.borderBottom = "1px solid black";
        }
    }
    }, 1000);
  };

  const handlePrintUpdate4 = () => {
    var elements = document.getElementsByClassName("hidePrint");
    var signatureRightAndSide=document.getElementsByClassName("file-upload-box");
    var increaseWidth=document.getElementsByClassName("increase-print-width");

     // hide bottom
     var form_field_gender = document.getElementsByClassName("form-field-child");
     var form_field_single_update = document.getElementsByClassName("form-field-single-update");

    // Iterate through each element with the specified class
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = "none";
    }

    for (let i = 0; i < signatureRightAndSide.length; i++) {
      signatureRightAndSide[i].style.justifyContent = "right";
    }
    for (let i = 0; i < increaseWidth.length; i++) {
      increaseWidth[i].style.width="80%";
      increaseWidth[i].style.margin="auto";
    }

    
        // hode bottom
        for (let i = 0; i < form_field_gender.length; i++) {
          var inputs = form_field_gender[i].getElementsByTagName("input");
          for (let j = 0; j < inputs.length; j++) {
              inputs[j].style.borderBottom = "none";
          }
      }
    
      for (let i = 0; i < form_field_single_update.length; i++) {
        var inputs = form_field_single_update[i].getElementsByTagName("input");
        for (let j = 0; j < inputs.length; j++) {
            inputs[j].style.borderBottom = "none";
        }
    }

    handlePrint4();
    // Use setTimeout to show the elements after a delay (adjust the timeout as needed)
    setTimeout(() => {
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "flex";
      }

      for (let i = 0; i < signatureRightAndSide.length; i++) {
        signatureRightAndSide[i].style.justifyContent = "space-between";
      }

      
      for (let i = 0; i < increaseWidth.length; i++) {
        increaseWidth[i].style.width="100%"
      }

       // hide bottom
       for (let i = 0; i < form_field_gender.length; i++) {
        var inputs = form_field_gender[i].getElementsByTagName("input");
        for (let j = 0; j < inputs.length; j++) {
            inputs[j].style.borderBottom = "1px solid black";
        }
    }

    for (let i = 0; i < form_field_single_update.length; i++) {
      var inputs = form_field_single_update[i].getElementsByTagName("input");
      for (let j = 0; j < inputs.length; j++) {
          inputs[j].style.borderBottom = "1px solid black";
      }
  }

    }, 1000);
  };

  const handlePrintUpdate5 = () => {
    var elements = document.getElementsByClassName("hidePrint");
    var signatureRightAndSide=document.getElementsByClassName("file-upload-box");
    var increaseWidth=document.getElementsByClassName("increase-print-width");

      // hide bottom
      var form_field_gender = document.getElementsByClassName("form-field-child");
      var form_field_single_update = document.getElementsByClassName("form-field-single-update");

    // Iterate through each element with the specified class
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = "none";
    }

    for (let i = 0; i < signatureRightAndSide.length; i++) {
      signatureRightAndSide[i].style.justifyContent = "right";
    }
    for (let i = 0; i < increaseWidth.length; i++) {
      increaseWidth[i].style.width="80%";
      increaseWidth[i].style.margin="auto";
    }

      // hode bottom
      for (let i = 0; i < form_field_gender.length; i++) {
        var inputs = form_field_gender[i].getElementsByTagName("input");
        for (let j = 0; j < inputs.length; j++) {
            inputs[j].style.borderBottom = "none";
        }
    }
  
    for (let i = 0; i < form_field_single_update.length; i++) {
      var inputs = form_field_single_update[i].getElementsByTagName("input");
      for (let j = 0; j < inputs.length; j++) {
          inputs[j].style.borderBottom = "none";
      }
  }

    handlePrint5();
    // Use setTimeout to show the elements after a delay (adjust the timeout as needed)
    setTimeout(() => {
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "flex";
      }
      for (let i = 0; i < signatureRightAndSide.length; i++) {
        signatureRightAndSide[i].style.justifyContent = "space-between";
      }
      for (let i = 0; i < increaseWidth.length; i++) {
        increaseWidth[i].style.width="100%"
      }

        // hide bottom
        for (let i = 0; i < form_field_gender.length; i++) {
          var inputs = form_field_gender[i].getElementsByTagName("input");
          for (let j = 0; j < inputs.length; j++) {
              inputs[j].style.borderBottom = "1px solid black";
          }
      }
  
      for (let i = 0; i < form_field_single_update.length; i++) {
        var inputs = form_field_single_update[i].getElementsByTagName("input");
        for (let j = 0; j < inputs.length; j++) {
            inputs[j].style.borderBottom = "1px solid black";
        }
    }
  

    }, 1000);
  };

  const handlePrintUpdate6 = () => {
    var elements = document.getElementsByClassName("hidePrint");
    var signatureRightAndSide=document.getElementsByClassName("file-upload-box");
    var increaseWidth=document.getElementsByClassName("increase-print-width");

     // hide bottom
     var form_field_gender = document.getElementsByClassName("form-field-child");
     var form_field_single_update = document.getElementsByClassName("form-field-single-update");

    // Iterate through each element with the specified class
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = "none";
    }
    
    for (let i = 0; i < signatureRightAndSide.length; i++) {
      signatureRightAndSide[i].style.justifyContent = "right";
    }

    for (let i = 0; i < increaseWidth.length; i++) {
      increaseWidth[i].style.width="80%";
      increaseWidth[i].style.margin="auto";
    }

        // hode bottom
        for (let i = 0; i < form_field_gender.length; i++) {
          var inputs = form_field_gender[i].getElementsByTagName("input");
          for (let j = 0; j < inputs.length; j++) {
              inputs[j].style.borderBottom = "none";
          }
      }
    
      for (let i = 0; i < form_field_single_update.length; i++) {
        var inputs = form_field_single_update[i].getElementsByTagName("input");
        for (let j = 0; j < inputs.length; j++) {
            inputs[j].style.borderBottom = "none";
        }
    }


    handlePrint6();
    // Use setTimeout to show the elements after a delay (adjust the timeout as needed)
    setTimeout(() => {
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "flex";
      }

      for (let i = 0; i < signatureRightAndSide.length; i++) {
        signatureRightAndSide[i].style.justifyContent = "space-between";
      }

      for (let i = 0; i < increaseWidth.length; i++) {
        increaseWidth[i].style.width="100%"
      }

        // hide bottom
        for (let i = 0; i < form_field_gender.length; i++) {
          var inputs = form_field_gender[i].getElementsByTagName("input");
          for (let j = 0; j < inputs.length; j++) {
              inputs[j].style.borderBottom = "1px solid black";
          }
      }
  
      for (let i = 0; i < form_field_single_update.length; i++) {
        var inputs = form_field_single_update[i].getElementsByTagName("input");
        for (let j = 0; j < inputs.length; j++) {
            inputs[j].style.borderBottom = "1px solid black";
        }
    }
    }, 1000);
  };

  const handlePrintUpdate7 = () => {
    var elements = document.getElementsByClassName("hidePrint");
    var signatureRightAndSide=document.getElementsByClassName("file-upload-box");
    var increaseWidth=document.getElementsByClassName("increase-print-width");

     // hide bottom
     var form_field_gender = document.getElementsByClassName("form-field-child");
     var form_field_single_update = document.getElementsByClassName("form-field-single-update");


     for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = "none";
    }
    for (let i = 0; i < increaseWidth.length; i++) {
      increaseWidth[i].style.width="80%";
      increaseWidth[i].style.margin="auto";
    }
    
    for (let i = 0; i < signatureRightAndSide.length; i++) {
      signatureRightAndSide[i].style.justifyContent = "right";
    }

     // hode bottom
     for (let i = 0; i < form_field_gender.length; i++) {
      var inputs = form_field_gender[i].getElementsByTagName("input");
      for (let j = 0; j < inputs.length; j++) {
          inputs[j].style.borderBottom = "none";
      }
  }

  for (let i = 0; i < form_field_single_update.length; i++) {
    var inputs = form_field_single_update[i].getElementsByTagName("input");
    for (let j = 0; j < inputs.length; j++) {
        inputs[j].style.borderBottom = "none";
    }
}

    handlePrint7();
    // Use setTimeout to show the elements after a delay (adjust the timeout as needed)
    setTimeout(() => {
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "flex";
      }
      for (let i = 0; i < signatureRightAndSide.length; i++) {
        signatureRightAndSide[i].style.justifyContent = "space-between";
      }
      
    for (let i = 0; i < increaseWidth.length; i++) {
      increaseWidth[i].style.width="100%"
    }

        // hide bottom
        for (let i = 0; i < form_field_gender.length; i++) {
          var inputs = form_field_gender[i].getElementsByTagName("input");
          for (let j = 0; j < inputs.length; j++) {
              inputs[j].style.borderBottom = "1px solid black";
          }
      }
  
      for (let i = 0; i < form_field_single_update.length; i++) {
        var inputs = form_field_single_update[i].getElementsByTagName("input");
        for (let j = 0; j < inputs.length; j++) {
            inputs[j].style.borderBottom = "1px solid black";
        }
    }
    }, 1000);
  };

  const handlePrintUpdate8 = () => {
    var elements = document.getElementsByClassName("hidePrint");
    var signatureRightAndSide=document.getElementsByClassName("file-upload-box");
    var submitButton=document.getElementsByClassName("form-actions");
    var increaseWidth=document.getElementsByClassName("increase-print-width");

     // hide bottom
     var form_field_gender = document.getElementsByClassName("form-field-child");
     var form_field_single_update = document.getElementsByClassName("form-field-single-update");
    // Iterate through each element with the specified class
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = "none";
    }
    for (let i = 0; i < signatureRightAndSide.length; i++) {
      signatureRightAndSide[i].style.justifyContent = "right";
    }

    for (let i = 0; i < submitButton.length; i++) {
      submitButton[i].style.display = "flex";
      submitButton[i].style.justifyContent = "center";
      submitButton[i].style.alignItems = "center";
    }
    for (let i = 0; i < increaseWidth.length; i++) {
      increaseWidth[i].style.width="80%";
      increaseWidth[i].style.margin="auto";
    }

    // hode bottom
    for (let i = 0; i < form_field_gender.length; i++) {
      var inputs = form_field_gender[i].getElementsByTagName("input");
      for (let j = 0; j < inputs.length; j++) {
          inputs[j].style.borderBottom = "none";
      }
  }

  for (let i = 0; i < form_field_single_update.length; i++) {
    var inputs = form_field_single_update[i].getElementsByTagName("input");
    for (let j = 0; j < inputs.length; j++) {
        inputs[j].style.borderBottom = "none";
    }
}

    handlePrint8();
    // Use setTimeout to show the elements after a delay (adjust the timeout as needed)
    setTimeout(() => {
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "flex";
      }
      for (let i = 0; i < signatureRightAndSide.length; i++) {
        signatureRightAndSide[i].style.justifyContent = "space-between";
      }

      for (let i = 0; i < submitButton.length; i++) {
        submitButton[i].style.display = "flex";
        submitButton[i].style.justifyContent = "center";
        submitButton[i].style.alignItems = "center";
      }
      
      for (let i = 0; i < increaseWidth.length; i++) {
        increaseWidth[i].style.width="100%"
      }

       // hide bottom
       for (let i = 0; i < form_field_gender.length; i++) {
        var inputs = form_field_gender[i].getElementsByTagName("input");
        for (let j = 0; j < inputs.length; j++) {
            inputs[j].style.borderBottom = "1px solid black";
        }
    }

    for (let i = 0; i < form_field_single_update.length; i++) {
      var inputs = form_field_single_update[i].getElementsByTagName("input");
      for (let j = 0; j < inputs.length; j++) {
          inputs[j].style.borderBottom = "1px solid black";
      }
  }
  
    }, 1000);
  };

  //page state
  const [page, setPage] = useState(1);

  const handleNextPage = () => {
    if (page <= 7) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page >= 2) {
      setPage(page - 1);
    }
  };

  //singin model
  const [draftModel, setDraftModel] = useState(false);
  //  all model
  const [signInModel1, setSigInModel1] = useState(false);
  const [signInModel2, setSigInModel2] = useState(false);
  const [signInModel3, setSigInModel3] = useState(false);
  const [signInModel4, setSigInModel4] = useState(false);
  const [signInModel5, setSigInModel5] = useState(false);
  const [signInModel6, setSigInModel6] = useState(false);
  const [signInModel7, setSigInModel7] = useState(false);
  const [signInModel8, setSigInModel8] = useState(false);
  const [signInModel9, setSigInModel9] = useState(false);
  const [signInModel10, setSigInModel10] = useState(false);
  const [signInModel11, setSigInModel11] = useState(false);
  const [signInModel12, setSigInModel12] = useState(false);
  const [signInModel13, setSigInModel13] = useState(false);
  const [signInModel14, setSigInModel14] = useState(false);
  const [signInModel15, setSigInModel15] = useState(false);
  const [signInModel16, setSigInModel16] = useState(false);
  const [signInModel17, setSigInModel17] = useState(false);
  const [signInModel18, setSigInModel18] = useState(false);
  const [signInModel19, setSigInModel19] = useState(false);

  //state
  const [saveAsDraft,setSaveAsDraft]=useState(false);
  const [userDetail, setUserDetail] = useState("");
  const [getApiData,setGetApiData]=useState("");
  const [user, setUser] = useState("");

  const [companyName, setCompanyName] = useState("");

  // useState value is start
  const [userId, setUserId] = useState("");
  const [iAgree, setiAgree] = useState(false);
  // const [residentName, setResidentName] = useState("");
  const [residentSignature, setResidentSignature] = useState("");
  const [residentDate, setResidentDate] = useState("");
  const [residentSignatureTime, setResidentSignatureTime] = useState("");
  const [guardianRepresentativeName, setGuardianRepresentativeName] =
    useState("");
  const [guardianRepresentativeSignature, setGuardianRepresentativeSignature] =
    useState("");
  const [guardianRepresentativeDate, setGuardianRepresentativeDate] =
    useState("");
  const [guardianRepresentativeTime, setGuardianRepresentativeTime] =
    useState("");
  const [staffName, setStaffName] = useState("");
  const [staffSignature, setStaffSignature] = useState("");
  const [staffDate, setStaffDate] = useState("");
  const [staffTime, setStaffTime] = useState("");

  // not present
  const [internalName, setInternalName] = useState("");
  const [internalRelationship, setInternalRelationship] = useState("");
  const [internalContect, setInternalContect] = useState("");

  const [internalDisclosureList, setInternalDisclosureList] = useState([]);
  const [internalDisclosureListExpire, setInternalDisclosureListExpire] =
    useState("");
  const [
    internalDisclosureListResidentName,
    setInternalDisclosureListResidentName,
  ] = useState("");
  const [
    internalDisclosureListResidentSignature,
    setInternalDisclosureListResidentSignature,
  ] = useState("");
  const [
    internalDisclosureListResidentDate,
    setInternalDisclosureListResidentDate,
  ] = useState("");
  const [
    internalDisclosureListResidentTime,
    setInternalDisclosureListResidentTime,
  ] = useState("");
  const [
    internalDisclosureListGuardianRepresentativeName,
    setInternalDisclosureListGuardianRepresentativeName,
  ] = useState("");
  const [
    internalDisclosureListGuardianRepresentativeSignature,
    setInternalDisclosureListGuardianRepresentativeSignature,
  ] = useState("");
  const [
    internalDisclosureListGuardianRepresentativeDate,
    setInternalDisclosureListGuardianRepresentativeDate,
  ] = useState("");
  const [
    internalDisclosureListGuardianRepresentativeTime,
    setInternalDisclosureListGuardianRepresentativeTime,
  ] = useState("");
  // not present 
  const [internalDisclosureListStaffName, setInternalDisclosureListStaffName] =
    useState("");
  const [
    internalDisclosureListStaffSignature,
    setInternalDisclosureListStaffSignature,
  ] = useState("");
  const [internalDisclosureListStaffDate, setInternalDisclosureListStaffDate] =
    useState("");
  const [internalDisclosureListStaffTime, setInternalDisclosureListStaffTime] =
    useState("");
  // Resident Signature not present start
  const [
    residentRightsGuardianRepresentativeName,
    setResidentRightsGuardianRepresentativeName,
  ] = useState();
  const [
    residentRightsGuardianRepresentativeSignature,
    setResidentRightsGuardianRepresentativeSignature,
  ] = useState("");
  const [
    residentRightsGuardianRepresentativeDate,
    setResidentRightsGuardianRepresentativeDate,
  ] = useState("");
  const [
    residentRightsGuardianRepresentativeTime,
    setResidentRightsGuardianRepresentativeTime,
  ] = useState("");
// Resident Signature not present end
  const [
    residentRightsResidentSignatureValue,
    setResidentRightsResidentSignatureValue,
  ] = useState("");
  const [
    residentRightsResidentSignatureValueDate,
    setResidentRightsResidentSignatureValueDate,
  ] = useState("");
  const [
    residentRightsResidentSignatureValueTime,
    setResidentRightsResidentSignatureValueTime,
  ] = useState("");

  const [residentRightsResidentName, setResidentRightsResidentName] =
  useState("");
const [residentRightsResidentSignature, setResidentRightsResidentSignature] =
  useState();

const [residentRightsResidentDate, setResidentRightsResidentDate] =
  useState("");
const [residentRightsResidentTime, setResidentRightsResidentTime] =
  useState("");

  const [photoVideoConsentResidentName, setPhotoVideoConsentResidentName] =
    useState("");
  const [photoVideoConsentDateOfBirth, setPhotoVideoConsentDateOfBirth] =
    useState("");
  const [photoVideoConsentAdmissionDate, setPhotoVideoConsentAdmissionDate] =
    useState("");
  const [photoVideoConsentConsentGiven, setPhotoVideoConsentConsentGiven] =
    useState(false);
  const [
    photoVideoConsentConsentWithdrawn,
    setPhotoVideoConsentConsentWithdrawn,
  ] = useState(false);
  const [
    photoVideoConsentResidentSignature,
    setPhotoVideoConsentResidentSignature,
  ] = useState("");
  const [photoVideoConsentResidentDate, setPhotoVideoConsentResidentDate] =
    useState("");
  const [photoVideoConsentResidentTime, setPhotoVideoConsentResidentTime] =
    useState("");

  const [
    photoVideoConsentGuardianRepresentativeName,
    setPhotoVideoConsentGuardianRepresentativeName,
  ] = useState("");
  const [
    photoVideoConsentGuardianRepresentativeSignature,
    setPhotoVideoConsentGuardianRepresentativeSignature,
  ] = useState("");
  const [
    photoVideoConsentGuardianRepresentativeDate,
    setPhotoVideoConsentGuardianRepresentativeDate,
  ] = useState("");

  const [
    photoVideoConsentGuardianRepresentativeTime,
    setPhotoVideoConsentGuardianRepresentativeTime,
  ] = useState("");
  const [advanceDirectivesResidentName, setAdvanceDirectivesResidentName] =
    useState("");
  const [advanceDirectivesResidentGender, setAdvanceDirectivesResidentGender] =
    useState("");
  const [
    advanceDirectivesResidentDateOfBirth,
    setAdvanceDirectivesResidentDateOfBirth,
  ] = useState("");
  const [
    advanceDirectivesResidentAddress,
    setAdvanceDirectivesResidentAddress,
  ] = useState("");
  const [advanceDirectivesResidentDate, setAdvanceDirectivesResidentDate] =
    useState("");

    // autosizeinput state start
  const [
    advanceDirectivesProvidedInfoInitials,
    setAdvanceDirectivesProvidedInfoInitials,
  ] = useState("");
  const [
    advanceDirectivesProvidedInfoDate,
    setAdvanceDirectivesProvidedInfoDate,
  ] = useState("");
  const [
    advanceDirectivesProvidedInfoTime,
    setAdvanceDirectivesProvidedInfoTime,
  ] = useState("");
  const [
    advanceDirectivesProvidedInfoRefusingInitials,
    setAdvanceDirectivesProvidedInfoRefusingInitials,
  ] = useState("");
  const [
    advanceDirectivesProvidedInfoRefusingDate,
    setAdvanceDirectivesProvidedInfoRefusingDate,
  ] = useState();
  const [
    advanceDirectivesProvidedInfoRefusingTime,
    setAdvanceDirectivesProvidedInfoRefusingTime,
  ] = useState("");
// autosizeinput state end

  const [advanceDirectivesDeveloped, setAdvanceDirectivesDeveloped] =
    useState();
  const [
    advanceDirectivesDevelopedComment,
    setAdvanceDirectivesDevelopedComment,
  ] = useState("");
  const [
    advanceDirectivesExecutedInRecord,
    setAdvanceDirectivesExecutedInRecord,
  ] = useState("");
  const [
    advanceDirectivesExecutedInRecordComment,
    setAdvanceDirectivesExecutedInRecordComment,
  ] = useState("");
  const [
    advanceDirectivesFilingStatusWishNotFiled,
    setAdvanceDirectivesFilingStatusWishNotFiled,
  ] = useState(false);
  const [
    advanceDirectivesFilingStatusAskedForCopyNotProvided,
    setAdvanceDirectivesFilingStatusAskedForCopyNotProvided,
  ] = useState(false);
  const [
    advanceDirectivesFilingStatusOther,
    setAdvanceDirectivesFilingStatusOther,
  ] = useState(false);
  const [
    advanceDirectivesCoordinationOfCareCopySentToPCP,
    setAdvanceDirectivesCoordinationOfCareCopySentToPCP,
  ] = useState("");
  const [
    advanceDirectivesCoordinationOfCareActedOn,
    setAdvanceDirectivesCoordinationOfCareActedOn,
  ] = useState("");
  const [
    advanceDirectivesCoordinationOfCareAppropriatePartiesNotified,
    setAdvanceDirectivesCoordinationOfCareAppropriatePartiesNotified,
  ] = useState("");
  const [
    advanceDirectivesCoordinationOfCareAppropriatePartiesNotifiedComment,
    setAdvanceDirectivesCoordinationOfCareAppropriatePartiesNotifiedComment,
  ] = useState("");
  const [
    complaintProcessAcknowledgementCompany,
    setComplaintProcessAcknowledgementCompany,
  ] = useState("");
  const [
    complaintProcessAcknowledgementResidentName,
    setComplaintProcessAcknowledgementResidentName,
  ] = useState("");
  const [
    complaintProcessAcknowledgementResidentSignature,
    setComplaintProcessAcknowledgementResidentSignature,
  ] = useState("");
  const [
    complaintProcessAcknowledgementResidentDate,
    setComplaintProcessAcknowledgementResidentDate,
  ] = useState("");
  const [
    complaintProcessAcknowledgementResidentTime,
    setComplaintProcessAcknowledgementResidentTime,
  ] = useState("");
  const [
    complaintProcessAcknowledgementGuardianRepresentativeName,
    setComplaintProcessAcknowledgementGuardianRepresentativeName,
  ] = useState("");
  const [
    complaintProcessAcknowledgementGuardianRepresentativeSignature,
    setComplaintProcessAcknowledgementGuardianRepresentativeSignature,
  ] = useState("");
  const [
    complaintProcessAcknowledgementGuardianRepresentativeDate,
    setComplaintProcessAcknowledgementGuardianRepresentativeDate,
  ] = useState("");
  const [
    complaintProcessAcknowledgementGuardianRepresentativeTime,
    setComplaintProcessAcknowledgementGuardianRepresentativeTime,
  ] = useState("");

  // not present
  const [
    orientationToAgencyCompanyFollowing,
    setOrientationToAgencyCompanyFollowing,
  ] = useState("");
  const [orientationToAgencyCompany, setOrientationToAgencyCompany] =
    useState("");

  const [ORIENTATIONDropDown, setORIENTATIONDropDown] = useState("");
  // const [orientationToAgencyResidentName, setOrientationToAgencyResidentName] =
  //   useState([]);
  const [
    orientationToAgencyResidentSignature,
    setOrientationToAgencyResidentSignature,
  ] = useState("");
  const [orientationToAgencyResidentDate, setOrientationToAgencyResidentDate] =
    useState("");
  const [orientationToAgencyResidentTime, setOrientationToAgencyResidentTime] =
    useState("");
  const [
    orientationToAgencyGuardianRepresentativeName,
    setOrientationToAgencyGuardianRepresentativeName,
  ] = useState("");
  const [
    orientationToAgencyGuardianRepresentativeSignature,
    setOrientationToAgencyGuardianRepresentativeSignature,
  ] = useState("");
  const [
    orientationToAgencyGuardianRepresentativeDate,
    setOrientationToAgencyGuardianRepresentativeDate,
  ] = useState("");
  const [
    orientationToAgencyGuardianRepresentativeTime,
    setOrientationToAgencyGuardianRepresentativeTime,
  ] = useState("");
  const [promotionTalkStrategicApproach, setPromotionTalkStrategicApproach] =
    useState("");
  const [
    lockBoxKeyIssueReturnDateKeyIssued,
    setLockBoxKeyIssueReturnDateKeyIssued,
  ] = useState("");
  const [
    lockBoxKeyIssueReturnDateKeyReturned,
    setLockBoxKeyIssueReturnDateKeyReturned,
  ] = useState("");
  const [lockBoxKeyIssueReturnAddress, setLockBoxKeyIssueReturnAddress] =
    useState("");
  const [
    lockBoxKeyIssueReturnResponsibleFor,
    setLockBoxKeyIssueReturnResponsibleFor,
  ] = useState("");
  const [
    lockBoxKeyIssueReturnResponsibleForCorporation,
    setLockBoxKeyIssueReturnResponsibleForCorporation,
  ] = useState("");
  const [lockBoxKeyIssueReturnCharged, setLockBoxKeyIssueReturnCharged] =
    useState("");
  const [
    lockBoxKeyIssueReturnResidentName,
    setLockBoxKeyIssueReturnResidentName,
  ] = useState("");
  const [
    lockBoxKeyIssueReturnResidentSignature,
    setLockBoxKeyIssueReturnResidentSignature,
  ] = useState("");
  const [
    lockBoxKeyIssueReturnResidentDate,
    setLockBoxKeyIssueReturnResidentDate,
  ] = useState("");
  const [
    lockBoxKeyIssueReturnResidentTime,
    setLockBoxKeyIssueReturnResidentTime,
  ] = useState("");
  const [
    lockBoxKeyIssueReturnGuardianRepresentativeName,
    setLockBoxKeyIssueReturnGuardianRepresentativeName,
  ] = useState("");
  const [
    lockBoxKeyIssueReturnGuardianRepresentativeSignature,
    setLockBoxKeyIssueReturnGuardianRepresentativeSignature,
  ] = useState("");
  const [
    lockBoxKeyIssueReturnGuardianRepresentativeDate,
    setLockBoxKeyIssueReturnGuardianRepresentativeDate,
  ] = useState("");
  const [
    lockBoxKeyIssueReturnGuardianRepresentativeTime,
    setLockBoxKeyIssueReturnGuardianRepresentativeTime,
  ] = useState("");
  const [lockBoxKeyIssueReturnStaffName, setLockBoxKeyIssueReturnStaffName] =
    useState("");
  const [
    lockBoxKeyIssueReturnStaffSignature,
    setLockBoxKeyIssueReturnStaffSignature,
  ] = useState("");
  const [lockBoxKeyIssueReturnStaffDate, setLockBoxKeyIssueReturnStaffDate] =
    useState("");
  const [lockBoxKeyIssueReturnStaffTime, setLockBoxKeyIssueReturnStaffTime] =
    useState("");
  const [
    insuranceInformationPrimaryInsurancePolicyholderName,
    setInsuranceInformationPrimaryInsurancePolicyholderName,
  ] = useState("");
  const [
    insuranceInformationPrimaryInsurancePolicyholderDateOfBirth,
    setInsuranceInformationPrimaryInsurancePolicyholderDateOfBirth,
  ] = useState("");
  const [
    insuranceInformationPrimaryInsurancePolicyholderAddress,
    setInsuranceInformationPrimaryInsurancePolicyholderAddress,
  ] = useState("");
  const [
    insuranceInformationPrimaryInsurancePolicyholderCity,
    setInsuranceInformationPrimaryInsurancePolicyholderCity,
  ] = useState("");
  const [
    insuranceInformationPrimaryInsurancePolicyholderState,
    setInsuranceInformationPrimaryInsurancePolicyholderState,
  ] = useState("");
  const [
    insuranceInformationPrimaryInsurancePolicyholderZip,
    setInsuranceInformationPrimaryInsurancePolicyholderZip,
  ] = useState("");
  const [
    insuranceInformationPrimaryInsurancePolicyholderPhone,
    setInsuranceInformationPrimaryInsurancePolicyholderPhone,
  ] = useState("");
  const [
    insuranceInformationPrimaryInsurancePolicyholderRelationship,
    setInsuranceInformationPrimaryInsurancePolicyholderRelationship,
  ] = useState("");

  const [
    insuranceInformationPrimaryInsuranceCompany,
    setInsuranceInformationPrimaryInsuranceCompany,
  ] = useState("");

  const [
    insuranceInformationPrimaryInsuranceCustomerServicePhone,
    setInsuranceInformationPrimaryInsuranceCustomerServicePhone,
  ] = useState("");

  const [
    insuranceInformationPrimaryInsuranceSubscriberNumber,
    setInsuranceInformationPrimaryInsuranceSubscriberNumber,
  ] = useState("");

  const [
    insuranceInformationPrimaryInsuranceSubscriberGroup,
    setInsuranceInformationPrimaryInsuranceSubscriberGroup,
  ] = useState("");

  const [
    insuranceInformationPrimaryInsuranceSubscriberEffectiveDate,
    setInsuranceInformationPrimaryInsuranceSubscriberEffectiveDate,
  ] = useState("");

  const [
    insuranceInformationSecondaryInsurancePolicyholderName,
    setInsuranceInformationSecondaryInsurancePolicyholderName,
  ] = useState("");

  const [
    insuranceInformationSecondaryInsurancePolicyholderDateOfBirth,
    setInsuranceInformationSecondaryInsurancePolicyholderDateOfBirth,
  ] = useState("");

  const [
    insuranceInformationSecondaryInsurancePolicyholderAddress,
    setInsuranceInformationSecondaryInsurancePolicyholderAddress,
  ] = useState("");

  const [
    insuranceInformationSecondaryInsurancePolicyholderCity,
    setInsuranceInformationSecondaryInsurancePolicyholderCity,
  ] = useState("");

  const [
    insuranceInformationSecondaryInsurancePolicyholderState,
    setInsuranceInformationSecondaryInsurancePolicyholderState,
  ] = useState("");

  const [
    insuranceInformationSecondaryInsurancePolicyholderZip,
    setInsuranceInformationSecondaryInsurancePolicyholderZip,
  ] = useState("");

  const [
    insuranceInformationSecondaryInsurancePolicyholderPhone,
    setInsuranceInformationSecondaryInsurancePolicyholderPhone,
  ] = useState("");

  const [
    insuranceInformationSecondaryInsurancePolicyholderRelationship,
    setInsuranceInformationSecondaryInsurancePolicyholderRelationship,
  ] = useState("");
  const [
    insuranceInformationSecondaryInsuranceCompany,
    setInsuranceInformationSecondaryInsuranceCompany,
  ] = useState("");
  const [
    insuranceInformationSecondaryInsuranceCustomerServicePhone,
    setInsuranceInformationSecondaryInsuranceCustomerServicePhone,
  ] = useState("");
  const [
    insuranceInformationSecondaryInsuranceSubscriberNumber,
    setInsuranceInformationSecondaryInsuranceSubscriberNumber,
  ] = useState("");

  const [
    insuranceInformationSecondaryInsuranceSubscriberGroup,
    setInsuranceInformationSecondaryInsuranceSubscriberGroup,
  ] = useState("");
  const [
    insuranceInformationSecondaryInsuranceSubscriberEffectiveDate,
    setInsuranceInformationSecondaryInsuranceSubscriberEffectiveDate,
  ] = useState("");

  const [
    obligationsAndAuthorizationResidentName,
    setObligationsAndAuthorizationResidentName,
  ] = useState("");

  const [
    obligationsAndAuthorizationResidentSignature,
    setObligationsAndAuthorizationResidentSignature,
  ] = useState("");

  const [
    obligationsAndAuthorizationResidentDate,
    setObligationsAndAuthorizationResidentDate,
  ] = useState("");

  const [
    obligationsAndAuthorizationResidentTime,
    setObligationsAndAuthorizationResidentTime,
  ] = useState("");

  const [
    obligationsAndAuthorizationGuardianRepresentativeName,
    setObligationsAndAuthorizationGuardianRepresentativeName,
  ] = useState("");

  const [
    obligationsAndAuthorizationGuardianRepresentativeSignature,
    setObligationsAndAuthorizationGuardianRepresentativeSignature,
  ] = useState("");

  const [
    obligationsAndAuthorizationGuardianRepresentativeDate,
    setObligationsAndAuthorizationGuardianRepresentativeDate,
  ] = useState("");

  const [
    obligationsAndAuthorizationGuardianRepresentativeTime,
    setObligationsAndAuthorizationGuardianRepresentativeTime,
  ] = useState("");


    // Function to format the date as MM-DD-YYYY
function formatDate(dateString) {
  if (!dateString) return ''; // handle null or undefined value
  const dateObj = new Date(dateString);
  const month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
  const day = ('0' + dateObj.getDate()).slice(-2);
  const year = dateObj.getFullYear();
  return `${month}-${day}-${year}`;
}

  useEffect(()=>{
    setiAgree(getApiData?.iAgree);
    // setResidentName("");
    setResidentSignature(getApiData?.residentSignature);
    setResidentDate(getApiData?.residentDate? formatDate(getApiData?.residentDate): "");
    setResidentSignatureTime(getApiData?.residentSignatureTime);
    setGuardianRepresentativeName(getApiData?.guardianRepresentativeName);
    setGuardianRepresentativeSignature(getApiData?.guardianRepresentativeSignature);
    setGuardianRepresentativeDate(getApiData?.guardianRepresentativeDate? formatDate(getApiData?.guardianRepresentativeDate): "");
    setGuardianRepresentativeTime(getApiData?.guardianRepresentativeTime);
    setStaffName(getApiData?.staffName);
    setStaffSignature(getApiData?.staffSignature);
    setStaffDate(getApiData?.staffDate? formatDate(getApiData?.staffDate): "");
    setStaffTime(getApiData?.staffTime);
    // setInternalName(getApiData?.guardianRepresentativeTime);
    // setInternalRelationship(getApiData?.guardianRepresentativeTime);
    // setInternalContect(getApiData?.guardianRepresentativeTime);
    setInternalDisclosureList(getApiData?.internalDisclosureList?getApiData?.internalDisclosureList:[]);
    setInternalDisclosureListExpire(getApiData?.internalDisclosureListExpire?getApiData?.internalDisclosureListExpire?.slice(0,10):"");
    setInternalDisclosureListResidentName(getApiData?.internalDisclosureListResidentName);
    setInternalDisclosureListResidentSignature(getApiData?.internalDisclosureListResidentSignature);
    setInternalDisclosureListResidentDate(getApiData?.internalDisclosureListResidentDate?formatDate(getApiData?.internalDisclosureListResidentDate): "");
    setInternalDisclosureListResidentTime(getApiData?.internalDisclosureListResidentTime);
    setInternalDisclosureListGuardianRepresentativeName(getApiData?.internalDisclosureListGuardianRepresentativeName);
    setInternalDisclosureListGuardianRepresentativeSignature(getApiData?.internalDisclosureListGuardianRepresentativeSignature);
    setInternalDisclosureListGuardianRepresentativeDate(getApiData?.internalDisclosureListGuardianRepresentativeDate? formatDate(getApiData?.internalDisclosureListGuardianRepresentativeDate): "");
    setInternalDisclosureListGuardianRepresentativeTime(getApiData?.internalDisclosureListGuardianRepresentativeTime);
    // setInternalDisclosureListStaffName(getApiData?.guardianRepresentativeTime);
    setInternalDisclosureListStaffSignature(getApiData?.internalDisclosureListStaffSignature);
    setInternalDisclosureListStaffDate(getApiData?.internalDisclosureListStaffDate? formatDate(getApiData?.internalDisclosureListStaffDate): "");
    setInternalDisclosureListStaffTime(getApiData?.internalDisclosureListStaffTime);
    setResidentRightsResidentSignatureValue(getApiData?.residentRightsResidentSignatureValue);
    setResidentRightsResidentSignatureValueDate(getApiData?.residentRightsResidentSignatureValueDate?getApiData?.residentRightsResidentSignatureValueDate?.slice(0,10):'');
    setResidentRightsResidentSignatureValueTime(getApiData?.internalDisclosureListStaffTime)
    setResidentRightsResidentName(getApiData?.residentRightsResidentName);
    setResidentRightsResidentSignature(getApiData?.residentRightsResidentSignature);
    setResidentRightsResidentDate(getApiData?.residentRightsResidentDate? formatDate(getApiData?.residentRightsResidentDate): "");
    // new value
    setResidentRightsResidentTime(getApiData?.residentRightsResidentTime);
    // setResidentRightsGuardianRepresentativeName(getApiData?.guardianRepresentativeTime);
    setResidentRightsGuardianRepresentativeSignature(getApiData?.residentRightsGuardianRepresentativeSignature);
    setResidentRightsGuardianRepresentativeDate(getApiData?.residentRightsGuardianRepresentativeDate? formatDate(getApiData?.residentRightsGuardianRepresentativeDate): "");
    setResidentRightsGuardianRepresentativeTime(getApiData?.residentRightsGuardianRepresentativeTime);

    setPhotoVideoConsentResidentName(getApiData?.photoVideoConsentResidentName);
    setPhotoVideoConsentDateOfBirth(getApiData?.photoVideoConsentDateOfBirth? getApiData?.photoVideoConsentDateOfBirth.slice(0,10):"");
    setPhotoVideoConsentAdmissionDate(getApiData?.photoVideoConsentAdmissionDate? getApiData?.photoVideoConsentAdmissionDate.slice(0,10): "");
    setPhotoVideoConsentConsentGiven(getApiData?.photoVideoConsentConsentGiven);
    setPhotoVideoConsentConsentWithdrawn(getApiData?.photoVideoConsentConsentWithdrawn);
    setPhotoVideoConsentResidentSignature(getApiData?.photoVideoConsentResidentSignature);
    setPhotoVideoConsentResidentDate(getApiData?.photoVideoConsentResidentDate? formatDate(getApiData?.photoVideoConsentResidentDate): "");
    setPhotoVideoConsentResidentTime(getApiData?.photoVideoConsentResidentTime);
    setPhotoVideoConsentGuardianRepresentativeName(getApiData?.photoVideoConsentGuardianRepresentativeName);
    setPhotoVideoConsentGuardianRepresentativeSignature(getApiData?.photoVideoConsentGuardianRepresentativeSignature);
    setPhotoVideoConsentGuardianRepresentativeDate(getApiData?.photoVideoConsentGuardianRepresentativeDate? formatDate(getApiData?.photoVideoConsentGuardianRepresentativeDate): "");
    setPhotoVideoConsentGuardianRepresentativeTime(getApiData?.photoVideoConsentGuardianRepresentativeTime);
    setAdvanceDirectivesResidentName(getApiData?.advanceDirectivesResidentName);
    setAdvanceDirectivesResidentGender(getApiData?.advanceDirectivesResidentGender);
    setAdvanceDirectivesResidentDateOfBirth(getApiData?.advanceDirectivesResidentDateOfBirth?getApiData?.advanceDirectivesResidentDateOfBirth?.slice(0,10):"");
    setAdvanceDirectivesResidentAddress(getApiData?.advanceDirectivesResidentAddress);
    setAdvanceDirectivesResidentDate(getApiData?.advanceDirectivesResidentDate? getApiData?.advanceDirectivesResidentDate.slice(0,10): "");
    setAdvanceDirectivesProvidedInfoInitials(getApiData?.advanceDirectivesProvidedInfoInitials);
    setAdvanceDirectivesProvidedInfoDate(getApiData?.advanceDirectivesProvidedInfoDate? getApiData?.advanceDirectivesProvidedInfoDate.slice(0,10): "");
    setAdvanceDirectivesProvidedInfoTime(getApiData?.guardianRepresentativeTime);
    setAdvanceDirectivesProvidedInfoRefusingInitials(getApiData?.advanceDirectivesProvidedInfoRefusingInitials);
    setAdvanceDirectivesProvidedInfoRefusingDate(getApiData?.advanceDirectivesProvidedInfoRefusingDate? getApiData?.advanceDirectivesProvidedInfoRefusingDate.slice(0,10): "");
    setAdvanceDirectivesProvidedInfoRefusingTime(getApiData?.advanceDirectivesProvidedInfoRefusingTime);
    setAdvanceDirectivesDeveloped(getApiData?.advanceDirectivesDeveloped);
    setAdvanceDirectivesDevelopedComment(getApiData?.advanceDirectivesDevelopedComment);
    setAdvanceDirectivesExecutedInRecord(getApiData?.advanceDirectivesExecutedInRecord);
    setAdvanceDirectivesExecutedInRecordComment(getApiData?.advanceDirectivesExecutedInRecordComment);
    setAdvanceDirectivesFilingStatusWishNotFiled(getApiData?.advanceDirectivesFilingStatusWishNotFiled);
    setAdvanceDirectivesFilingStatusAskedForCopyNotProvided(getApiData?.advanceDirectivesFilingStatusAskedForCopyNotProvided);
    setAdvanceDirectivesFilingStatusOther(getApiData?.advanceDirectivesFilingStatusOther);
    setAdvanceDirectivesCoordinationOfCareCopySentToPCP(getApiData?.advanceDirectivesCoordinationOfCareCopySentToPCP);
    setAdvanceDirectivesCoordinationOfCareActedOn(getApiData?.advanceDirectivesCoordinationOfCareActedOn);
    setAdvanceDirectivesCoordinationOfCareAppropriatePartiesNotified(getApiData?.advanceDirectivesCoordinationOfCareAppropriatePartiesNotified);
    setAdvanceDirectivesCoordinationOfCareAppropriatePartiesNotifiedComment(getApiData?.advanceDirectivesCoordinationOfCareAppropriatePartiesNotifiedComment);
    setComplaintProcessAcknowledgementCompany(getApiData?.complaintProcessAcknowledgementCompany);
    setComplaintProcessAcknowledgementResidentName(getApiData?.complaintProcessAcknowledgementResidentName);
    setComplaintProcessAcknowledgementResidentSignature(getApiData?.complaintProcessAcknowledgementResidentSignature);
    setComplaintProcessAcknowledgementResidentDate(getApiData?.complaintProcessAcknowledgementResidentDate? formatDate(getApiData?.complaintProcessAcknowledgementResidentDate): "");
    setComplaintProcessAcknowledgementResidentTime(getApiData?.complaintProcessAcknowledgementResidentTime)
    setComplaintProcessAcknowledgementGuardianRepresentativeName(getApiData?.complaintProcessAcknowledgementGuardianRepresentativeName);
    setComplaintProcessAcknowledgementGuardianRepresentativeSignature(getApiData?.complaintProcessAcknowledgementGuardianRepresentativeSignature);
    setComplaintProcessAcknowledgementGuardianRepresentativeDate(getApiData?.complaintProcessAcknowledgementGuardianRepresentativeDate? formatDate(getApiData?.complaintProcessAcknowledgementGuardianRepresentativeDate): "");
    setComplaintProcessAcknowledgementGuardianRepresentativeTime(getApiData?.complaintProcessAcknowledgementGuardianRepresentativeTime);
    // setOrientationToAgencyCompanyFollowing(getApiData?.guardianRepresentativeTime);
    setOrientationToAgencyCompany(getApiData?.orientationToAgencyCompany);
    setORIENTATIONDropDown(getApiData?.orientationToAgencyCompanyFollowing ? getApiData?.orientationToAgencyCompanyFollowing?.map(item => ({
      label: item, 
      value: item    
    }))
  : []);
    // setOrientationToAgencyResidentName("");
    setOrientationToAgencyResidentSignature(getApiData?.orientationToAgencyResidentSignature);
    setOrientationToAgencyResidentDate(getApiData?.orientationToAgencyResidentDate? formatDate(getApiData?.orientationToAgencyResidentDate): "");
    setOrientationToAgencyResidentTime(getApiData?.orientationToAgencyResidentTime);
    setOrientationToAgencyGuardianRepresentativeName(getApiData?.orientationToAgencyGuardianRepresentativeName);
    setOrientationToAgencyGuardianRepresentativeSignature(getApiData?.orientationToAgencyGuardianRepresentativeSignature);
    setOrientationToAgencyGuardianRepresentativeDate(getApiData?.orientationToAgencyGuardianRepresentativeDate? formatDate(getApiData?.orientationToAgencyGuardianRepresentativeDate): "");
    setOrientationToAgencyGuardianRepresentativeTime(getApiData?.orientationToAgencyGuardianRepresentativeTime);
    setPromotionTalkStrategicApproach(getApiData?.promotionTalkStrategicApproach);
    setLockBoxKeyIssueReturnDateKeyIssued(getApiData?.lockBoxKeyIssueReturnDateKeyIssued?getApiData?.lockBoxKeyIssueReturnDateKeyIssued?.slice(0,10):"");
    setLockBoxKeyIssueReturnDateKeyReturned(getApiData?.lockBoxKeyIssueReturnDateKeyReturned?getApiData?.lockBoxKeyIssueReturnDateKeyReturned?.slice(0,10):'');
    setLockBoxKeyIssueReturnAddress(getApiData?.lockBoxKeyIssueReturnAddress);
    setLockBoxKeyIssueReturnResponsibleFor(getApiData?.lockBoxKeyIssueReturnResponsibleFor);
    setLockBoxKeyIssueReturnResponsibleForCorporation(getApiData?.lockBoxKeyIssueReturnResponsibleForCorporation);
    setLockBoxKeyIssueReturnCharged(getApiData?.lockBoxKeyIssueReturnCharged);
    // setLockBoxKeyIssueReturnResidentName(getApiData?.lockBoxKeyIssueReturnResidentName);
    setLockBoxKeyIssueReturnResidentSignature(getApiData?.lockBoxKeyIssueReturnResidentSignature);
    setLockBoxKeyIssueReturnResidentDate(getApiData?.lockBoxKeyIssueReturnResidentDate? formatDate(getApiData?.lockBoxKeyIssueReturnResidentDate): "");
    setLockBoxKeyIssueReturnResidentTime(getApiData?.lockBoxKeyIssueReturnResidentTime);
    setLockBoxKeyIssueReturnGuardianRepresentativeName(getApiData?.lockBoxKeyIssueReturnGuardianRepresentativeName);
    setLockBoxKeyIssueReturnGuardianRepresentativeSignature(getApiData?.lockBoxKeyIssueReturnGuardianRepresentativeSignature);
    setLockBoxKeyIssueReturnGuardianRepresentativeDate(getApiData?.lockBoxKeyIssueReturnGuardianRepresentativeDate? formatDate(getApiData?.lockBoxKeyIssueReturnGuardianRepresentativeDate): "");
    setLockBoxKeyIssueReturnGuardianRepresentativeTime(getApiData?.lockBoxKeyIssueReturnGuardianRepresentativeTime);
    setLockBoxKeyIssueReturnStaffName(getApiData?.lockBoxKeyIssueReturnStaffName);
    setLockBoxKeyIssueReturnStaffSignature(getApiData?.lockBoxKeyIssueReturnStaffSignature);
    setLockBoxKeyIssueReturnStaffDate(getApiData?.lockBoxKeyIssueReturnStaffDate?formatDate(getApiData?.lockBoxKeyIssueReturnStaffDate): "");
    setLockBoxKeyIssueReturnStaffTime(getApiData?.lockBoxKeyIssueReturnStaffTime);
    setInsuranceInformationPrimaryInsurancePolicyholderName(getApiData?.insuranceInformationPrimaryInsurancePolicyholderName);
    setInsuranceInformationPrimaryInsurancePolicyholderDateOfBirth(getApiData?.insuranceInformationPrimaryInsurancePolicyholderDateOfBirth? getApiData?.insuranceInformationPrimaryInsurancePolicyholderDateOfBirth.slice(0,10): "");
    setInsuranceInformationPrimaryInsurancePolicyholderAddress(getApiData?.insuranceInformationPrimaryInsurancePolicyholderAddress);
    setInsuranceInformationPrimaryInsurancePolicyholderCity(getApiData?.insuranceInformationPrimaryInsurancePolicyholderCity);
    setInsuranceInformationPrimaryInsurancePolicyholderState(getApiData?.insuranceInformationPrimaryInsurancePolicyholderState);
    setInsuranceInformationPrimaryInsurancePolicyholderZip(getApiData?.insuranceInformationPrimaryInsurancePolicyholderZip);
    setInsuranceInformationPrimaryInsurancePolicyholderPhone(getApiData?.insuranceInformationPrimaryInsurancePolicyholderPhone);
    setInsuranceInformationPrimaryInsurancePolicyholderRelationship(getApiData?.insuranceInformationPrimaryInsurancePolicyholderRelationship);
    setInsuranceInformationPrimaryInsuranceCompany(getApiData?.insuranceInformationPrimaryInsuranceCompany);
    setInsuranceInformationPrimaryInsuranceCustomerServicePhone(getApiData?.insuranceInformationPrimaryInsuranceCustomerServicePhone);
    setInsuranceInformationPrimaryInsuranceSubscriberNumber(getApiData?.insuranceInformationPrimaryInsuranceSubscriberNumber);
    setInsuranceInformationPrimaryInsuranceSubscriberGroup(getApiData?.insuranceInformationPrimaryInsuranceSubscriberGroup);
    setInsuranceInformationPrimaryInsuranceSubscriberEffectiveDate(getApiData?.insuranceInformationPrimaryInsuranceSubscriberEffectiveDate?getApiData?.insuranceInformationPrimaryInsuranceSubscriberEffectiveDate.slice(0,10):"");
    setInsuranceInformationSecondaryInsurancePolicyholderName(getApiData?.insuranceInformationSecondaryInsurancePolicyholderName);
    setInsuranceInformationSecondaryInsurancePolicyholderDateOfBirth(getApiData?.insuranceInformationSecondaryInsurancePolicyholderDateOfBirth ? getApiData?.insuranceInformationSecondaryInsurancePolicyholderDateOfBirth.slice(0,10):"");
    setInsuranceInformationSecondaryInsurancePolicyholderAddress(getApiData?.insuranceInformationSecondaryInsurancePolicyholderAddress);
    setInsuranceInformationSecondaryInsurancePolicyholderCity(getApiData?.insuranceInformationSecondaryInsurancePolicyholderCity);
    setInsuranceInformationSecondaryInsurancePolicyholderState(getApiData?.insuranceInformationSecondaryInsurancePolicyholderState);
    setInsuranceInformationSecondaryInsurancePolicyholderZip(getApiData?.insuranceInformationSecondaryInsurancePolicyholderZip);
    setInsuranceInformationSecondaryInsurancePolicyholderPhone(getApiData?.insuranceInformationSecondaryInsurancePolicyholderPhone);
    setInsuranceInformationSecondaryInsurancePolicyholderRelationship(getApiData?.insuranceInformationSecondaryInsurancePolicyholderRelationship);
    setInsuranceInformationSecondaryInsuranceCompany(getApiData?.insuranceInformationSecondaryInsuranceCompany);
    setInsuranceInformationSecondaryInsuranceCustomerServicePhone(getApiData?.insuranceInformationSecondaryInsuranceCustomerServicePhone);
    setInsuranceInformationSecondaryInsuranceSubscriberNumber(getApiData?.insuranceInformationSecondaryInsuranceSubscriberNumber);
    setInsuranceInformationSecondaryInsuranceSubscriberGroup(getApiData?.insuranceInformationSecondaryInsuranceSubscriberGroup);
    setInsuranceInformationSecondaryInsuranceSubscriberEffectiveDate(getApiData?.insuranceInformationSecondaryInsuranceSubscriberEffectiveDate?getApiData?.insuranceInformationSecondaryInsuranceSubscriberEffectiveDate.slice(0,10):'');
    setObligationsAndAuthorizationResidentName(getApiData?.obligationsAndAuthorizationResidentName);
    setObligationsAndAuthorizationResidentSignature(getApiData?.obligationsAndAuthorizationResidentSignature);
    setObligationsAndAuthorizationResidentDate(getApiData?.obligationsAndAuthorizationResidentDate? formatDate(getApiData?.obligationsAndAuthorizationResidentDate): "");
    setObligationsAndAuthorizationResidentTime(getApiData?.obligationsAndAuthorizationResidentTime);
    setObligationsAndAuthorizationGuardianRepresentativeName(getApiData?.obligationsAndAuthorizationGuardianRepresentativeName);
    setObligationsAndAuthorizationGuardianRepresentativeSignature(getApiData?.obligationsAndAuthorizationGuardianRepresentativeSignature);
    setObligationsAndAuthorizationGuardianRepresentativeDate(getApiData?.obligationsAndAuthorizationGuardianRepresentativeDate? formatDate(getApiData?.obligationsAndAuthorizationGuardianRepresentativeDate): "");
    setObligationsAndAuthorizationGuardianRepresentativeTime(getApiData?.obligationsAndAuthorizationGuardianRepresentativeTime);
  },[getApiData])

  const [previusData,setPreviusData]=useState(false)

  // useEffect(()=>{
  //   if(previusData){
  //     Resident_form_get(userId,setGetApiData);
  //   }
  // },[userId,previusData])

  useEffect(() => {
    setLoading(true); 
    if (previusData) {
      Resident_form_get(userId, (data) => {
        setGetApiData(data);
        setLoading(false); 
      });
    } else {
      setLoading(false); 
    }
  }, [userId, previusData]);

  useEffect(() => {
    setFiledForm(userDetail?.residentIntakes);
    setUserId(userDetail?._id);
    setUser(userDetail?.fullName);
    setCompanyName(userDetail?.companyName);
    
  }, [userDetail]);

  useEffect(() => {
    user_detail(setUserDetail);
  }, []);

  // handle internal list
  const handleinternalData = () => {
    if (internalContect || internalName || internalRelationship) {
      setInternalDisclosureList((prev) => [
        ...prev,
        { contactNumber:internalContect, personName:internalName, relationship:internalRelationship },
      ]);
      setInternalContect("");
      setInternalRelationship("");
      setInternalName("");
    }
  };

  // handle delete array
  const handleDeleteArrayInternalDisclosure = (index) => {
    setInternalDisclosureList((prev) => [
      ...prev.filter((_, i) => i !== index),
    ]);
  };

  const initializeValues = () => {
    setiAgree(false);
    // setResidentName("");
    setResidentSignature("");
    setResidentDate("");
    setResidentSignatureTime("");
    setGuardianRepresentativeName("");
    setGuardianRepresentativeSignature("");
    setGuardianRepresentativeDate("");
    setGuardianRepresentativeTime("");
    setStaffName("");
    setStaffSignature("");
    setStaffDate("");
    setStaffTime("");
    setInternalName("");
    setInternalRelationship("");
    setInternalContect("");
    setInternalDisclosureList([]);
    setInternalDisclosureListExpire("");
    setInternalDisclosureListResidentName("");
    setInternalDisclosureListResidentSignature("");
    setInternalDisclosureListResidentDate("");
    setInternalDisclosureListResidentTime("");
    setInternalDisclosureListGuardianRepresentativeName("");
    setInternalDisclosureListGuardianRepresentativeSignature("");
    setInternalDisclosureListGuardianRepresentativeDate("");
    setInternalDisclosureListGuardianRepresentativeTime("");
    setInternalDisclosureListStaffName("");
    setInternalDisclosureListStaffSignature("");
    setInternalDisclosureListStaffDate("");
    setInternalDisclosureListStaffTime("");
    // setResidentRightsResidentSignatureValue("");
    // setResidentRightsResidentSignatureValueDate("");
    setResidentRightsResidentName("");
    setResidentRightsResidentSignature("");
    setResidentRightsResidentDate("");
    // new value
    setResidentRightsResidentTime("");
    setResidentRightsGuardianRepresentativeName("");
    setResidentRightsGuardianRepresentativeSignature("");
    setResidentRightsGuardianRepresentativeDate("");
    setResidentRightsGuardianRepresentativeTime("");

    setPhotoVideoConsentResidentName("");
    setPhotoVideoConsentDateOfBirth("");
    setPhotoVideoConsentAdmissionDate("");
    setPhotoVideoConsentConsentGiven("");
    setPhotoVideoConsentConsentWithdrawn("");
    setPhotoVideoConsentResidentSignature("");
    setPhotoVideoConsentResidentDate("");
    setPhotoVideoConsentResidentTime("");
    setPhotoVideoConsentGuardianRepresentativeName("");
    setPhotoVideoConsentGuardianRepresentativeSignature("");
    setPhotoVideoConsentGuardianRepresentativeDate("");
    setPhotoVideoConsentGuardianRepresentativeTime("");
    setAdvanceDirectivesResidentName("");
    setAdvanceDirectivesResidentGender("");
    setAdvanceDirectivesResidentDateOfBirth("");
    setAdvanceDirectivesResidentAddress("");
    setAdvanceDirectivesResidentDate("");
    setAdvanceDirectivesProvidedInfoInitials("");
    setAdvanceDirectivesProvidedInfoDate("");
    setAdvanceDirectivesProvidedInfoTime("");
    setAdvanceDirectivesProvidedInfoRefusingInitials("");
    setAdvanceDirectivesProvidedInfoRefusingDate("");
    setAdvanceDirectivesProvidedInfoRefusingTime("");
    setAdvanceDirectivesDeveloped("");
    setAdvanceDirectivesDevelopedComment("");
    setAdvanceDirectivesExecutedInRecord("");
    setAdvanceDirectivesExecutedInRecordComment("");
    setAdvanceDirectivesFilingStatusWishNotFiled(false);
    setAdvanceDirectivesFilingStatusAskedForCopyNotProvided(false);
    setAdvanceDirectivesFilingStatusOther(false);
    setAdvanceDirectivesCoordinationOfCareCopySentToPCP("");
    setAdvanceDirectivesCoordinationOfCareActedOn("");
    setAdvanceDirectivesCoordinationOfCareAppropriatePartiesNotified("");
    setAdvanceDirectivesCoordinationOfCareAppropriatePartiesNotifiedComment("");
    setComplaintProcessAcknowledgementCompany("");
    setComplaintProcessAcknowledgementResidentName("");
    setComplaintProcessAcknowledgementResidentSignature("");
    setComplaintProcessAcknowledgementResidentDate("");
    setComplaintProcessAcknowledgementResidentTime("");
    setComplaintProcessAcknowledgementGuardianRepresentativeName("");
    setComplaintProcessAcknowledgementGuardianRepresentativeSignature("");
    setComplaintProcessAcknowledgementGuardianRepresentativeDate("");
    setComplaintProcessAcknowledgementGuardianRepresentativeTime("");
    setOrientationToAgencyCompanyFollowing("");
    setOrientationToAgencyCompany("");
    setORIENTATIONDropDown("");
    // setOrientationToAgencyResidentName("");
    setOrientationToAgencyResidentSignature("");
    setOrientationToAgencyResidentDate("");
    setOrientationToAgencyResidentTime("");
    setOrientationToAgencyGuardianRepresentativeName("");
    setOrientationToAgencyGuardianRepresentativeSignature("");
    setOrientationToAgencyGuardianRepresentativeDate("");
    setOrientationToAgencyGuardianRepresentativeTime("");
    setPromotionTalkStrategicApproach("");
    setLockBoxKeyIssueReturnDateKeyIssued("");
    setLockBoxKeyIssueReturnDateKeyReturned("");
    setLockBoxKeyIssueReturnAddress("");
    setLockBoxKeyIssueReturnResponsibleFor("");
    setLockBoxKeyIssueReturnResponsibleForCorporation("");
    setLockBoxKeyIssueReturnCharged("");
    setLockBoxKeyIssueReturnResidentName("");
    setLockBoxKeyIssueReturnResidentSignature("");
    setLockBoxKeyIssueReturnResidentDate("");
    setLockBoxKeyIssueReturnResidentTime("");
    setLockBoxKeyIssueReturnGuardianRepresentativeName("");
    setLockBoxKeyIssueReturnGuardianRepresentativeSignature("");
    setLockBoxKeyIssueReturnGuardianRepresentativeDate("");
    setLockBoxKeyIssueReturnGuardianRepresentativeTime("");
    setLockBoxKeyIssueReturnStaffName("");
    setLockBoxKeyIssueReturnStaffSignature("");
    setLockBoxKeyIssueReturnStaffDate("");
    setLockBoxKeyIssueReturnStaffTime("");
    setInsuranceInformationPrimaryInsurancePolicyholderName("");
    setInsuranceInformationPrimaryInsurancePolicyholderDateOfBirth("");
    setInsuranceInformationPrimaryInsurancePolicyholderAddress("");
    setInsuranceInformationPrimaryInsurancePolicyholderCity("");
    setInsuranceInformationPrimaryInsurancePolicyholderState("");
    setInsuranceInformationPrimaryInsurancePolicyholderZip("");
    setInsuranceInformationPrimaryInsurancePolicyholderPhone("");
    setInsuranceInformationPrimaryInsurancePolicyholderRelationship("");
    setInsuranceInformationPrimaryInsuranceCompany("");
    setInsuranceInformationPrimaryInsuranceCustomerServicePhone("");
    setInsuranceInformationPrimaryInsuranceSubscriberNumber("");
    setInsuranceInformationPrimaryInsuranceSubscriberGroup("");
    setInsuranceInformationPrimaryInsuranceSubscriberEffectiveDate("");
    setInsuranceInformationSecondaryInsurancePolicyholderName("");
    setInsuranceInformationSecondaryInsurancePolicyholderDateOfBirth("");
    setInsuranceInformationSecondaryInsurancePolicyholderAddress("");
    setInsuranceInformationSecondaryInsurancePolicyholderCity("");
    setInsuranceInformationSecondaryInsurancePolicyholderState("");
    setInsuranceInformationSecondaryInsurancePolicyholderZip("");
    setInsuranceInformationSecondaryInsurancePolicyholderPhone("");
    setInsuranceInformationSecondaryInsurancePolicyholderRelationship("");
    setInsuranceInformationSecondaryInsuranceCompany("");
    setInsuranceInformationSecondaryInsuranceCustomerServicePhone("");
    setInsuranceInformationSecondaryInsuranceSubscriberNumber("");
    setInsuranceInformationSecondaryInsuranceSubscriberGroup("");
    setInsuranceInformationSecondaryInsuranceSubscriberEffectiveDate("");
    setObligationsAndAuthorizationResidentName("");
    setObligationsAndAuthorizationResidentSignature("");
    setObligationsAndAuthorizationResidentDate("");
    setObligationsAndAuthorizationResidentTime("");
    setObligationsAndAuthorizationGuardianRepresentativeName("");
    setObligationsAndAuthorizationGuardianRepresentativeSignature("");
    setObligationsAndAuthorizationGuardianRepresentativeDate("");
    setObligationsAndAuthorizationGuardianRepresentativeTime("");
  };

  const data = {
    patientId: userId,
    iAgree,
    saveAsDraft,
    residentSignature,
    residentDate,
    residentSignatureTime,
    guardianRepresentativeName,
    guardianRepresentativeSignature,
    guardianRepresentativeDate,
    guardianRepresentativeTime,
    staffName,
    staffSignature,
    staffDate,
    staffTime,
    internalDisclosureList: internalDisclosureList,
    internalDisclosureListExpire,
    internalDisclosureListResidentName,
    internalDisclosureListResidentSignature,
    internalDisclosureListResidentDate,
    internalDisclosureListGuardianRepresentativeName,
    internalDisclosureListGuardianRepresentativeSignature,
    internalDisclosureListGuardianRepresentativeDate,
    internalDisclosureListGuardianRepresentativeTime,
    internalDisclosureListResidentTime,
    internalDisclosureListStaffName,
    internalDisclosureListStaffSignature,
    internalDisclosureListStaffDate,
    internalDisclosureListStaffTime,
    // add some key
    residentRightsResidentSignatureValue,
    residentRightsResidentSignatureValueDate,
    residentRightsResidentSignatureValueTime,
    residentRightsResidentName,
    residentRightsResidentSignature,
    residentRightsResidentDate,
    residentRightsResidentTime,
    residentRightsGuardianRepresentativeName,
    residentRightsGuardianRepresentativeSignature,
    residentRightsGuardianRepresentativeDate,
    residentRightsGuardianRepresentativeTime,

    photoVideoConsentResidentName,
    photoVideoConsentDateOfBirth,
    photoVideoConsentAdmissionDate,
    photoVideoConsentConsentGiven,
    photoVideoConsentConsentWithdrawn,
    photoVideoConsentResidentSignature,
    photoVideoConsentResidentDate,
    photoVideoConsentResidentTime,
    photoVideoConsentGuardianRepresentativeName,
    photoVideoConsentGuardianRepresentativeSignature,
    photoVideoConsentGuardianRepresentativeDate,
    photoVideoConsentGuardianRepresentativeTime,
    advanceDirectivesResidentName,
    advanceDirectivesResidentGender,
    advanceDirectivesResidentDateOfBirth,
    advanceDirectivesResidentAddress,
    advanceDirectivesResidentDate,
    advanceDirectivesProvidedInfoInitials,
    advanceDirectivesProvidedInfoDate,
    advanceDirectivesProvidedInfoRefusingInitials,
    advanceDirectivesProvidedInfoRefusingDate,
    advanceDirectivesProvidedInfoRefusingTime,
    // advanceDirectivesProvidedInfoTime,
    advanceDirectivesDeveloped,
    advanceDirectivesDevelopedComment,
    advanceDirectivesExecutedInRecord,
    advanceDirectivesExecutedInRecordComment,
    advanceDirectivesFilingStatusWishNotFiled,
    advanceDirectivesFilingStatusAskedForCopyNotProvided,
    advanceDirectivesFilingStatusOther,
    advanceDirectivesCoordinationOfCareCopySentToPCP,
    advanceDirectivesCoordinationOfCareActedOn,
    advanceDirectivesCoordinationOfCareAppropriatePartiesNotified,
    advanceDirectivesCoordinationOfCareAppropriatePartiesNotifiedComment,
    complaintProcessAcknowledgementCompany,
    complaintProcessAcknowledgementResidentName,
    complaintProcessAcknowledgementResidentSignature,
    complaintProcessAcknowledgementResidentDate,
    complaintProcessAcknowledgementResidentTime,
    complaintProcessAcknowledgementGuardianRepresentativeName,
    complaintProcessAcknowledgementGuardianRepresentativeSignature,
    complaintProcessAcknowledgementGuardianRepresentativeDate,
    complaintProcessAcknowledgementGuardianRepresentativeTime,
    // orientationToAgencyCompanyFollowing,
    orientationToAgencyCompany,
    // orientationToAgencyResidentName,
    orientationToAgencyResidentSignature,
    orientationToAgencyResidentDate,
    orientationToAgencyResidentTime,
    orientationToAgencyGuardianRepresentativeName,
    orientationToAgencyGuardianRepresentativeSignature,
    orientationToAgencyGuardianRepresentativeDate,
    orientationToAgencyGuardianRepresentativeTime,
    promotionTalkStrategicApproach,
    lockBoxKeyIssueReturnDateKeyIssued,
    lockBoxKeyIssueReturnDateKeyReturned,
    lockBoxKeyIssueReturnAddress,
    lockBoxKeyIssueReturnResponsibleFor,
    lockBoxKeyIssueReturnResponsibleForCorporation,
    lockBoxKeyIssueReturnCharged,
    lockBoxKeyIssueReturnResidentName,
    lockBoxKeyIssueReturnResidentSignature,
    lockBoxKeyIssueReturnResidentDate,
    lockBoxKeyIssueReturnResidentTime,
    lockBoxKeyIssueReturnGuardianRepresentativeName,
    lockBoxKeyIssueReturnGuardianRepresentativeSignature,
    lockBoxKeyIssueReturnGuardianRepresentativeDate,
    lockBoxKeyIssueReturnGuardianRepresentativeTime,
    lockBoxKeyIssueReturnStaffName,
    lockBoxKeyIssueReturnStaffSignature,
    lockBoxKeyIssueReturnStaffDate,
    lockBoxKeyIssueReturnStaffTime,
    insuranceInformationPrimaryInsurancePolicyholderName,
    insuranceInformationPrimaryInsurancePolicyholderDateOfBirth,
    insuranceInformationPrimaryInsurancePolicyholderAddress,
    insuranceInformationPrimaryInsurancePolicyholderCity,
    insuranceInformationPrimaryInsurancePolicyholderState,
    insuranceInformationPrimaryInsurancePolicyholderZip,
    insuranceInformationPrimaryInsurancePolicyholderPhone,
    insuranceInformationPrimaryInsurancePolicyholderRelationship,
    insuranceInformationPrimaryInsuranceCompany,
    insuranceInformationPrimaryInsuranceCustomerServicePhone,
    insuranceInformationPrimaryInsuranceSubscriberNumber,
    insuranceInformationPrimaryInsuranceSubscriberGroup,
    insuranceInformationPrimaryInsuranceSubscriberEffectiveDate,
    insuranceInformationSecondaryInsurancePolicyholderName,
    insuranceInformationSecondaryInsurancePolicyholderDateOfBirth,
    insuranceInformationSecondaryInsurancePolicyholderAddress,
    insuranceInformationSecondaryInsurancePolicyholderCity,
    insuranceInformationSecondaryInsurancePolicyholderState,
    // paending
    insuranceInformationSecondaryInsurancePolicyholderZip,
    insuranceInformationSecondaryInsurancePolicyholderPhone,
    insuranceInformationSecondaryInsurancePolicyholderRelationship,
    insuranceInformationSecondaryInsuranceCompany,
    insuranceInformationSecondaryInsuranceCustomerServicePhone,
    insuranceInformationSecondaryInsuranceSubscriberNumber,
    insuranceInformationSecondaryInsuranceSubscriberGroup,
    insuranceInformationSecondaryInsuranceSubscriberEffectiveDate,
    obligationsAndAuthorizationResidentName,
    obligationsAndAuthorizationResidentSignature,
    obligationsAndAuthorizationResidentDate,
    obligationsAndAuthorizationResidentTime,
    obligationsAndAuthorizationGuardianRepresentativeName,
    obligationsAndAuthorizationGuardianRepresentativeSignature,
    obligationsAndAuthorizationGuardianRepresentativeDate,
    obligationsAndAuthorizationGuardianRepresentativeTime
  };

  const optionValue = [
    {
      label:
        "An explanation of the behavioral health services the agency provides",
      value:
        "An explanation of the behavioral health services the agency provides",
    },
    {
      label:
        "A description of the expectations for resident behavior and rules",
      value:
        "A description of the expectations for resident behavior and rules",
    },
    {
      label: "A tour of the premises and identification of the evacuation path",
      value: "A tour of the premises and identification of the evacuation path",
    },
    {
      label: "A schedule of planned activities for residents",
      value: "A schedule of planned activities for residents",
    },
    {
      label: "Introductions to staff members and employees.",
      value: "Introductions to staff members and employees.",
    },
  ];

  const handleKeyDownORIENTATIONDropDown = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

      // Check if the input value already exists in the options array
      const optionExists = optionValue.some(
        (option) => option.value === inputValue
      );

      // If the input value doesn't exist, add it to the array
      if (!optionExists) {
        const newOptions = [
          ...optionValue,
          { value: inputValue, label: inputValue },
        ];

        // Update the state with the new options
        setORIENTATIONDropDown(newOptions);

        // Update the selected values to include the newly created option
        const newSelectedValues = [
          ...ORIENTATIONDropDown,
          { value: inputValue, label: inputValue },
        ];
        setORIENTATIONDropDown(newSelectedValues);
      }

      // Clear the input value after adding the option
      event.target.value = "";
    }
  };

  const optionHandler = (optionValue) => {
    setORIENTATIONDropDown(optionValue);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    Resident_form(data);
    initializeValues();
    navigate("/intake");
  };

  const saveAndSignHandler=()=>{
    saveAsDraft(true);
    setDraftModel(true);
  }

  return (
    <>
      <div ref={componentRef9}>
        <div className="backbutton hidePrint">
          <IoArrowBackCircle
            style={{
              color: "#1A9FB2",
              width: "40px",
              height: "40px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/intake")}
          />
        </div>

        {/* ======================================================== */}
        <div className="Boss">
          <div className="formheading1">
            <div className="formsheading2">
              <div className="checkboxitem125555">
              <label>CONSENT FOR TREATMENT</label>
              </div>
            </div>
          </div>

          <form onSubmit={submitHandler}>
            {page === 1 && (
              <>
                <div
                  ref={componentRef1}
                  className="increase-print-width"
                >

               <div className="formheading1-hide">
                 <div className="formsheading2">
                 <h1>CONSENT FOR TREATMENT</h1>
               </div>
               </div>
                  
                  <div className="residentdiv">
              
                    <h6>
                      I voluntarily apply for evaluation/behavioral health
                      treatment at
                      <span>        
            
            <AutoSize value={companyName} setValue={setCompanyName} placeholder={"Company Name"}/>
            
                      </span>{" "}
                      and understand, consent and agree as follows (to be
                      executed by legally authorized person if the Resident is
                      incapable of giving informed consent):
                    </h6>
                    <ul>
                      <li>
                        I agree to participate in my treatment to the best of my
                        ability and will let my provider know if situations
                        occur that prevent me from participating in treatment.
                      </li>
                      <li>
                        I understand that this consent will remain valid so long
                        as I am admitted in this facility, or until I withdraw
                        consent.
                      </li>
                      <li>
                        Information developed as part of evaluation/treatment
                        and your psychiatric record is confidential but may be
                        released to those parties as required by law such as
                        (information may be released without my consent) in
                        cases of medical emergency, abuse or neglect, court
                        order, insurance billing claims requirements, audit and
                        program evaluation and where otherwise legally required.
                        Additionally, I understand that by signing this consent
                        I am giving permission for ADHS/DBHS to access my
                        information and records maintained by the T/RBHA,{" "}
                        <span>
                      
                       <AutoSize value={companyName} setValue={setCompanyName} placeholder={"Company Name"}/>
                        </span>
                        and/or it’s subcontracted providers concerning the
                        provision of covered services.
                      </li>
                      <li>
                        I consent to the use and disclosure of my protected
                        health information (PHI) by
                        <span>
                      
                       <AutoSize value={companyName} setValue={setCompanyName} placeholder={"Company Name"}/>
                        </span>
                        , it’s staff members and it’s contractors / interns for
                        the purpose of treatment, payment and health care
                        operations. This is a joint consent form between
                        <span>
                        
                       <AutoSize value={companyName} setValue={setCompanyName} placeholder={"Company Name"}/>
                        </span>{" "}
                        and it’s staff members. I understand the following: My
                        signature on the consent is required in order for me to
                        receive care from{" "}
                        <span>
                        
                       <AutoSize value={companyName} setValue={setCompanyName} placeholder={"Company Name"}/>
                        </span>
                        , I have the right to revoke this consent, in writing,
                        at any time, except to the extent that
                        <span>
                    
                       <AutoSize value={companyName} setValue={setCompanyName} placeholder={"Company Name"}/>
                        </span>{" "}
                        has taken action in reliance upon this consent.
                      </li>
                      <li>
                        I understand that all the information gathered during my
                        treatment is confidential.
                      </li>
                      <li>
                        However, confidential information may be disclosed
                        without my consent in accordance with state and federal
                        law.
                      </li>
                      <li>
                        I understand that this Consent to treatment is
                        voluntary, and I may decline at any time.
                      </li>
                    </ul>
                  </div>
                  <div className="yeschechbox2">
                   
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={iAgree == true}
                        onChange={() => setiAgree(!iAgree)}
                      />
                      <label htmlFor="">
                        I Agree to the Terms & Conditions
                      </label>
                    </div>
                  </div>

               

                  <label
                    htmlFor=""
                    className="label-review-resitent"
                    style={{ fontWeight: "bold" }}
                  >
                    Resident Signature:
                  </label>

                  <div class="file-upload-box ">
                    <div className="file-upload-box-child hidePrint">
                      <button
                        className="upload-button1"
                        type="button"
                        onClick={() =>saveAndSignHandler()}
                      >
                        SAVED AS DRAFT
                      </button>
                      <button
                        className="upload-button"
                        type="button"
                        onClick={() => setSigInModel1(true)}
                      >
                        SAVED AND SIGNED
                      </button>
                    </div>
                    <div>
                      {residentSignature && (
                        <p className="signature_name_print">
                          Digitally Sign by {residentSignature} {residentDate}{" "}
                          {residentSignatureTime}
                        </p>
                      )}
                    </div>
                  </div>

                  {signInModel1 && (
                    <SingInUpdateModel
                      onClose={() => setSigInModel1(false)}
                      singin={residentSignature}
                      setSingIn={setResidentSignature}
                      setDateAndTime={setResidentDate}
                      setSignatureTime={setResidentSignatureTime}
                    />
                  )}

               
                  <div className="form-field-single-update">
                    <label>Guardian/Representative Name:</label>
                    <input
                      type="text"
                      id="admissionDate"
                      value={guardianRepresentativeName}
                      placeholder="Enter full name"
                      required
                      onChange={(e) =>
                        setGuardianRepresentativeName(e.target.value)
                      }
                    />
                  </div>

                  <div class="file-upload-box">
                    <div className="file-upload-box-child hidePrint">
                      <button
                        className="upload-button1"
                        type="button"
                        onClick={() => saveAndSignHandler()}
                      >
                        SAVED AS DRAFT
                      </button>
                      <button
                        className="upload-button"
                        type="button"
                        onClick={() => setSigInModel2(true)}
                      >
                        SAVED AND SIGNED
                      </button>
                    </div>
                    <div>
                      {guardianRepresentativeSignature && (
                        <p className="signature_name_print">
                          Digitally Sign by {guardianRepresentativeSignature}{" "}
                          {guardianRepresentativeDate}{" "}
                          {guardianRepresentativeTime}
                        </p>
                      )}
                    </div>
                  </div>

                  {signInModel2 && (
                    <SingInUpdateModel
                      onClose={() => setSigInModel2(false)}
                      singin={guardianRepresentativeSignature}
                      setSingIn={setGuardianRepresentativeSignature}
                      setDateAndTime={setGuardianRepresentativeDate}
                      setSignatureTime={setGuardianRepresentativeTime}
                    />
                  )}

            
                  <div className="form-field-single-update">
                    <label>Staff Name:</label>
                    <input
                      type="text"
                      value={staffName}
                      placeholder="Enter full name"
                      required
                      onChange={(e) => setStaffName(e.target.value)}
                    />
                  </div>

                  <div class="file-upload-box ">
                    <div className="file-upload-box-child hidePrint">
                      <div>
                        <button
                          className="upload-button1"
                          type="button"
                          onClick={() => saveAndSignHandler()}
                        >
                          SAVED AS DRAFT
                        </button>
                      </div>
                      <div>
                        <button
                          className="upload-button"
                          type="button"
                          onClick={() => setSigInModel3(true)}
                        >
                          SAVED AND SIGNED
                        </button>
                      </div>
                      <div>
                        <button
                          onClick={handlePrintUpdate1}
                          className="upload-button signature_shift_margin"
                          type="button"
                        >
                          PRINT THIS FORM
                        </button>
                      </div>
                    </div>
                    <div>
                      {staffSignature && (
                        <p className="signature_name_print">
                          Digitally Sign by {staffSignature} {staffDate}{" "}
                          {staffTime}
                        </p>
                      )}
                    </div>
                  </div>

                  {signInModel3 && (
                    <SingInUpdateModel
                      onClose={() => setSigInModel3(false)}
                      singin={staffSignature}
                      setSingIn={setStaffSignature}
                      setDateAndTime={setStaffDate}
                      setSignatureTime={setStaffTime}
                    />
                  )}

                  <div className="form-actions-next hidePrint">
                    {page !== 1 && (
                      <div>
                        <button
                          type="button"
                          className="initalsubmitRisistent"
                          onClick={handlePrevPage}
                        >
                          Prev Page
                        </button>
                      </div>
                    )}

                    {page !== 8 && (
                      <div>
                        <button
                          type="button"
                          className="initalsubmitRisistent"
                          onClick={handleNextPage}
                        >
                          Next Page
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}

            {/* second session2 */}
            {page === 2 && (
              <>
                <div
                  ref={componentRef2} className="print-content increase-print-width"
                 
                >
                  <h6
                    style={{
                      fontWeight: "500",
                      fontSize: "24px",
                      textAlign: "center",
                      marginBottom: "20px",
                      marginTop: "1.5rem",
                    }}
                  >
                    Internal Resident Disclosure List
                  </h6>
                  <p>
                    I authorize and agree that
                    <span>
                  
                   <AutoSize value={companyName} setValue={setCompanyName} placeholder={"Company Name"}/>
                    </span>{" "}
                    may verbally disclose my protected health information (PHI)
                    to the following family members, individuals and / or
                    significant others in my life each of whom is directly
                    involved in my care and are concerned about my well being
                    specifically for the purpose of coordinating care issues
                    either in person or on the telephone.
                  </p>
                  <p>
                    I authorize and agree that{" "}
                    <span>
                   
                   <AutoSize value={companyName} setValue={setCompanyName} placeholder={"Company Name"}/>
                    </span>{" "}
                    may acknowledge and accept telephone calls from the
                    following family members, individuals and / All significant
                    others in my life each of whom is directly involved in my
                    care and are concerned about my well being who may want to
                    talk to me while at{" "}
                    <span>
                    <AutoSize value={companyName} setValue={setCompanyName} placeholder={"Company Name"}/>
                    </span>
                  </p>

                  <div className="form-field-update hidePrint">
                    <div className="form-field-child">
                      <label>Name of Person:</label>
                      <input
                        type="text"
                        value={internalName}
                        placeholder="Enter text"
                        onChange={(e) => setInternalName(e.target.value)}
                      />
                    </div>
                    <div className="form-field-child">
                      <label>Relationship:</label>
                      <input
                        type="text"
                        value={internalRelationship}
                        placeholder="Enter text"
                        onChange={(e) =>
                          setInternalRelationship(e.target.value)
                        }
                      />
                    </div>
                    <div className="form-field-child">
                      <label>Contact:</label>
                      <input
                        type="number"
                        value={internalContect}
                        placeholder="Enter Number"
                        onChange={(e) => setInternalContect(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-actions hidePrint addButton">
                    <button
                      type="button"
                      className="safetybutton"
                      onClick={handleinternalData}
                    >
                      ADD
                    </button>
                  </div>
                  <div className="needs-interventions-container">
                    <div className="needs-interventions-column3">
                      {internalDisclosureList.length > 0 && (
                        <table>
                          <thead>
                            <th>Name of Person</th>
                            <th>Relationship</th>
                            <th>Contact</th>
                            <th className="hidePrint">Action</th>
                          </thead>
                          <tbody>
                            {internalDisclosureList?.map((i, index) => (
                              <tr>
                                <td>{` ${i.personName}`} </td>
                                <td>{` ${i.relationship}`} </td>
                                <td>{` ${i.contactNumber}`} </td>
                                <td className="hidePrint">
                                  {
                                    <AiFillDelete
                                      style={{
                                        fontSize: "1.5rem",
                                        cursor: "pointer",
                                      }}
                                      onClick={() =>
                                        handleDeleteArrayInternalDisclosure(
                                          index
                                        )
                                      }
                                    />
                                  }{" "}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      )}
                    </div>
                  </div>
                  <p style={{ marginTop: "1.5rem" }}>
                    I acknowledge and agree that{" "}
                    <span>
                    <AutoSize value={companyName} setValue={setCompanyName} placeholder={"Company Name"}/>
                    </span>{" "}
                    may disclose my protected health information to the
                    person(s) set forth in this form. I understand that I can
                    revoke this authorization in writing, except to the extent
                    that action has already been taken, at any time and it will
                    expire on{" "}
                    <span>
                 
                   <AutoSize type="date" value={internalDisclosureListExpire} setValue={setInternalDisclosureListExpire} placeholder={"____________"}/>
                    </span>{" "}
                    or one year from the date of my signature.{" "}
                  </p>
                  <h6
                    style={{
                      fontWeight: "600",
                      fontSize: "18px",
                      marginTop: "0.5rem",
                      marginBottom: "0.5rem",
                      padding: "0 10px"
                    }}
                  >
                    Please Provide the Expiry Date Below :
                  </h6>

                 

                  <div class="file-upload-box ">
                    <div className="file-upload-box-child hidePrint">
                      <button
                        className="upload-button1"
                        type="button"
                        onClick={() => saveAndSignHandler()}
                      >
                        SAVED AS DRAFT
                      </button>
                      <button
                        className="upload-button"
                        type="button"
                        onClick={() => setSigInModel4(true)}
                      >
                        SAVED AND SIGNED
                      </button>
                    </div>
                    <div>
                      {internalDisclosureListResidentSignature && (
                        <p className="signature_name_print">
                          Digitally Sign by{" "}
                          {internalDisclosureListResidentSignature}{" "}
                          {internalDisclosureListResidentDate}{" "}
                          {internalDisclosureListResidentTime}
                        </p>
                      )}
                    </div>
                  </div>

                  {signInModel4 && (
                    <SingInUpdateModel
                      onClose={() => setSigInModel4(false)}
                      singin={internalDisclosureListResidentSignature}
                      setSingIn={setInternalDisclosureListResidentSignature}
                      setDateAndTime={setInternalDisclosureListResidentDate}
                      setSignatureTime={setInternalDisclosureListResidentTime}
                    />
                  )}

                  <div className="form-field-single-update">
                    <label>Guardian/Representative Name:</label>
                    <input
                      type="text"
                      id="AHCCCS"
                      value={internalDisclosureListGuardianRepresentativeName}
                      placeholder="Enter text"
                      required
                      onChange={(e) =>
                        setInternalDisclosureListGuardianRepresentativeName(
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <label
                    htmlFor=""
                    className="label-review-resitent"
                    style={{ fontWeight: "bold" }}
                  >
                    Guardian / Representative Signature:
                  </label>
                  <div class="file-upload-box">
                    <div className="file-upload-box-child hidePrint">
                      <button
                        className="upload-button1"
                        type="button"
                        onClick={() =>saveAndSignHandler()}
                      >
                        SAVED AS DRAFT
                      </button>
                      <button
                        className="upload-button"
                        type="button"
                        onClick={() => setSigInModel5(true)}
                      >
                        SAVED AND SIGNED
                      </button>
                    </div>
                    <div>
                      {internalDisclosureListGuardianRepresentativeSignature && (
                        <p className="signature_name_print">
                          Digitally Sign by{" "}
                          {
                            internalDisclosureListGuardianRepresentativeSignature
                          }{" "}
                          {internalDisclosureListGuardianRepresentativeDate}{" "}
                          {internalDisclosureListGuardianRepresentativeTime}
                        </p>
                      )}
                    </div>
                  </div>

                  {signInModel5 && (
                    <SingInUpdateModel
                      onClose={() => setSigInModel5(false)}
                      singin={
                        internalDisclosureListGuardianRepresentativeSignature
                      }
                      setSingIn={
                        setInternalDisclosureListGuardianRepresentativeSignature
                      }
                      setDateAndTime={
                        setInternalDisclosureListGuardianRepresentativeDate
                      }
                      setSignatureTime={setInternalDisclosureListGuardianRepresentativeTime}
                    />
                  )}

        
                  <label
                    htmlFor=""
                    className="label-review-resitent"
                    style={{ fontWeight: "bold" }}
                  >
                    Staff Signature:
                  </label>
                  <div class="file-upload-box ">
                    <div className="file-upload-box-child hidePrint">
                      <button
                        className="upload-button1"
                        type="button"
                        onClick={() => saveAndSignHandler()}
                      >
                        SAVED AS DRAFT
                      </button>
                      <button
                        className="upload-button"
                        type="button"
                        onClick={() => setSigInModel6(true)}
                      >
                        SAVED AND SIGNED
                      </button>
                    </div>
                    <div>
                      {internalDisclosureListStaffSignature && (
                        <p className="signature_name_print">
                          Digitally Sign by{" "}
                          {internalDisclosureListStaffSignature}{" "}
                          {internalDisclosureListStaffDate}{" "}
                          {internalDisclosureListStaffTime}
                        </p>
                      )}
                    </div>
                  </div>

                  {signInModel6 && (
                    <SingInUpdateModel
                      onClose={() => setSigInModel6(false)}
                      singin={internalDisclosureListStaffSignature}
                      setSingIn={setInternalDisclosureListStaffSignature}
                      setDateAndTime={setInternalDisclosureListStaffDate}
                      setSignatureTime={setInternalDisclosureListStaffTime}
                    />
                  )}

                  <h6
                    style={{
                      fontWeight: "600",
                      fontSize: "18px",
                      marginTop: "0.5rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    R9-10-711. Resident Rights
                  </h6>
                  <div className="Residentrights">
                    <p>A. An administrator shall ensure that:</p>
                    <p>
                      1. The requirements in subsection (B) and the resident
                      rights in subsection (E) are conspicuously posted on the
                      premises;
                    </p>
                    <p>
                      2. At the time of admission, a resident or the resident 's
                      representative receives a written copy of the requirements
                      in subsection (B) and the resident rights in subsection
                      (E); and
                    </p>
                    <p>3. Policies and procedures include:</p>
                    <p>
                      a. How and when a resident or the resident’s
                      representative is informed of the resident rights in
                      subsection (E), and
                    </p>
                    <p>
                      b. Where resident rights are posted as required in
                      subsection (A)(1).
                    </p>
                    <p>B. An administrator shall ensure that:</p>
                    <p>
                      1. A resident is treated with dignity, respect, and
                      consideration;
                    </p>
                    <p>2. A resident is not subjected to:</p>
                    <p>a. Abuse;</p>
                    <p>b. Neglect;</p>
                    <p>c. Exploitation;</p>
                    <p>d. Coercion;</p>
                    <p>e. Manipulation;</p>
                    <p>f. Sexual abuse;</p>
                    <p>g. Sexual assault;</p>
                    <p>h. Seclusion;</p>
                    <p>i. Restraint;</p>
                    <p>
                      j. Retaliation for submitting a complaint to the
                      Department or another entity;
                    </p>
                    <p>
                      k. Misappropriation of personal and private property by
                      the behavioral health residential facility’s personnel
                      members, employees, volunteers, or students;
                    </p>
                    <p>
                      l. Discharge or transfer, or threat of discharge or
                      transfer, for reasons unrelated to the resident’s
                      treatment needs, except as established in a fee agreement
                      signed by the resident or the resident 's representative;
                      or
                    </p>
                    <p>m. Treatment that involves the denial of:</p>
                    <p>i. Food,</p>
                    <p>ii. The opportunity to sleep, or</p>
                    <p>iii. The opportunity to use the toilet;</p>
                    <p>
                      3. Except as provided in subsection (C) or (D), and unless
                      restricted by the resident’s representative, is allowed
                      to:
                    </p>
                    <p>
                      a. Associate with individuals of the resident’s choice,
                      receive visitors, and make telephone calls during the
                      hours established by the behavioral health residential
                      facility;
                    </p>
                    <p>
                      b. Have privacy in correspondence, communication,
                      visitation, financial affairs, and personal hygiene; and
                    </p>
                    <p>
                      c. Unless restricted by a court order, send and receive
                      uncensored and unopened mail; and
                    </p>
                    <p>4. A resident or the resident's representative:</p>
                    <p>
                      a. Except in an emergency, either consents to or refuses
                      treatment;
                    </p>
                    <p>
                      b. May refuse or withdraw consent for treatment before
                      treatment is initiated, unless the treatment is ordered by
                      a ourt according to A.R.S. Title 36, Chapter;
                    </p>
                    <p>
                      5 or A.R.S. 8-341.01; is necessary to save the resident’s
                      life or physical health; or is provided according to
                      A.R.S. § 36-512;
                    </p>
                    <p>
                      c. Except in an emergency, is informed of proposed
                      treatment alternatives, associated risks, and possible
                      complications;
                    </p>
                    <p>d. Is informed of the following:</p>
                    <p>
                      i. The behavioral health residential facility’s policy on
                      health care directives, and
                    </p>
                    <p>ii. The resident complaint process; and</p>
                    <p>
                      e. Except as otherwise permitted by law, provides written
                      consent to the release of information in the resident’s:
                    </p>
                    <p>i. Medical record, or</p>
                    <p>ii. Financial records.</p>
                    <p>
                      C. For a behavioral health residential facility with
                      licensed capacity of less than 10 residents, if a
                      behavioral health professional determines that a
                      resident’s treatment requires the behavioral health
                      residential facility to restrict the resident’s ability to
                      participate in the activities in subsection (B)(3), the
                      behavioral health professional shall:
                    </p>
                    <p>
                      1. Document a specific treatment purpose in the resident’s
                      medical record that justifies restricting the resident
                      from the activity,
                    </p>
                    <p>
                      2. Inform the resident or resident’s representative of the
                      reason why the activity is being restricted, and
                    </p>
                    <p>
                      3. Inform the resident or resident’s representative of the
                      resident’s right to file a complaint and the procedure for
                      filing a complaint.
                    </p>
                    <p>
                      D. For a behavioral health residential facility with a
                      licensed capacity of 10 or more residents, if a clinical
                      director determines that a resident’s treatment requires
                      the behavioral health residential facility to restrict the
                      resident’s ability to participate in the activities in
                      subsection (B)(3), the clinical director shall comply with
                      the requirements in subsections (C)(1) through (3).
                    </p>
                    <p>E. A resident has the following rights:</p>
                    <p>
                      1. Not to be discriminated against based on race, national
                      origin, religion, gender, sexual orientation, age,
                      disability, marital status, or diagnosis;
                    </p>
                    <p>2. To receive treatment that:</p>
                    <p>
                      a. Supports and respects the resident’s individuality,
                      choices, strengths, and abilities;
                    </p>
                    <p>
                      b. Supports the resident’s personal liberty and only
                      restricts the resident’s personal liberty according to a
                      court order, by the resident’s or the resident’s
                      representative’s general consent, or as permitted in this
                      Chapter; and
                    </p>
                    <p>
                      c. Is provided in the least restrictive environment that
                      meets the resident’s treatment needs;
                    </p>
                    <p>
                      3. To receive privacy in treatment and care for personal
                      needs, including the right not to be fingerprinted,
                      photographed, or recorded without consent, except:
                    </p>
                    <p>
                      a. A resident may be photographed when admitted to a
                      behavioral health residential facility for identification
                      and administrative purposes
                    </p>
                    <p>
                      b. For a resident receiving treatment according to A.R.S.
                      Title 36, Chapter 37; or
                    </p>
                    <p>
                      c. For video recordings used for security purposes that
                      are maintained only on a temporary basis;
                    </p>
                    <p>
                      4. Not to be prevented or impeded from exercising the
                      resident’s civil rights unless the resident has been
                      adjudicated incompetent or a court of competent
                      jurisdiction has found that the resident is not able to
                      exercise a specific right or category of rights;
                    </p>
                    <p>
                      5. To review, upon written request, the resident’s own
                      medical record according to A.R.S. §§12-2293, 12-2294, and
                      12-2294.01;
                    </p>
                    <p>
                      6. To be provided locked storage space for the resident’s
                      belongings while the resident receives treatment;
                    </p>
                    <p>
                      7. To have opportunities for social contact and daily
                      social, recreational, or rehabilitative activities;
                    </p>
                    <p>
                      8. To be informed of the requirements necessary for the
                      resident’s discharge or transfer to a less restrictive
                      physical environment;
                    </p>
                    <p>
                      9. To receive a referral to another health care
                      institution if the behavioral health residential facility
                      is not authorized or not able to provide physical health
                      services or behavioral health services needed by the
                      resident;
                    </p>
                    <p>
                      10. To participate or have the resident's representative
                      participate in the development of a treatment plan or
                      decisions concerning treatment;
                    </p>
                    <p>
                      11. To participate or refuse to participate in research or
                      experimental treatment.
                    </p>
                    <p>
                      12. To receive assistance from a family member, the
                      resident’s representative, or other individual in
                      understanding, protecting, or exercising the resident’s
                      right
                    </p>
                  </div>

                  <div className="signatureIsSameLine">
                  <label
                    className="label-review-resitent"
                    style={{ fontWeight: "bold" }}
                  >
                    Resident Signature:
                  </label>
                  <div class="file-upload-box ">
                    <div className="file-upload-box-child hidePrint">
                      <button
                        className="upload-button1"
                        type="button"
                        onClick={() => saveAndSignHandler()}
                      >
                        SAVED AS DRAFT
                      </button>
                      <button
                        className="upload-button"
                        type="button"
                        onClick={() => setSigInModel7(true)}
                      >
                        SAVED AND SIGNED
                      </button>
                    </div>
                    <div>
                      {residentRightsResidentSignatureValue && (
                        <p className="signature_name_print">
                          Digitally Sign by{" "}
                          {residentRightsResidentSignatureValue}{" "}
                          {residentRightsResidentSignatureValueDate}{" "}
                          {residentRightsResidentSignatureValueTime}
                        </p>
                      )}
                    </div>
                  </div>

                  </div>

                  {signInModel7 && (
                    <SingInUpdateModel
                      onClose={() => setSigInModel7(false)}
                      singin={residentRightsResidentSignatureValue}
                      setSingIn={setResidentRightsResidentSignatureValue}
                      setDateAndTime={
                        setResidentRightsResidentSignatureValueDate
                      }
                      setSignatureTime={setResidentRightsResidentSignatureValueTime}
                    />
                  )}

                  <div className="form-field-single-update">
                    <label>Guardian/Representative Name:</label>
                    <input
                      type="text"
                      value={residentRightsResidentName}
                      placeholder="Name"
                      onChange={(e) =>
                        setResidentRightsResidentName(e.target.value)
                      }
                    />
                  </div>

                  <label
                    htmlFor=""
                    className="label-review-resitent"
                    style={{ fontWeight: "bold" }}
                  >
                    Guardian/Representative Signature:
                  </label>
                  <div class="file-upload-box ">
                    <div className="file-upload-box-child hidePrint">
                      <div>
                        <button
                          className="upload-button1"
                          type="button"
                          onClick={() => saveAndSignHandler()}
                        >
                          SAVED AS DRAFT
                        </button>
                      </div>
                      <div>
                        <button
                          className="upload-button"
                          type="button"
                          onClick={() => setSigInModel8(true)}
                        >
                          SAVED AND SIGNED
                        </button>
                      </div>
                      <div>
                        <button
                          onClick={handlePrintUpdate2}
                          className="upload-button signature_shift_margin"
                          type="button"
                        >
                          PRINT THIS FORM
                        </button>
                      </div>
                    </div>
                    <div>
                      {residentRightsResidentSignature && (
                        <p className="signature_name_print">
                          Digitally Sign by {residentRightsResidentSignature}{" "}
                          {residentRightsResidentDate}{" "}
                          {residentRightsResidentTime}
                        </p>
                      )}
                    </div>
                  </div>

                  {signInModel8 && (
                    <SingInUpdateModel
                      onClose={() => setSigInModel8(false)}
                      singin={residentRightsResidentSignature}
                      setSingIn={setResidentRightsResidentSignature}
                      setDateAndTime={setResidentRightsResidentDate}
                      setSignatureTime={setResidentRightsResidentTime}
                    />
                  )}

                  <div className="form-actions-next hidePrint">
                    {page !== 1 && (
                      <div>
                        <button
                          type="button"
                          className="initalsubmitRisistent"
                          onClick={handlePrevPage}
                        >
                          Prev Page
                        </button>
                      </div>
                    )}

                    {page !== 8 && (
                      <div>
                        <button
                          type="button"
                          className="initalsubmitRisistent"
                          onClick={handleNextPage}
                        >
                          Next Page
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}

            {/* section 3 */}
            {page === 3 && (
              <>
                <div
                  ref={componentRef3}
                  className="increase-print-width"
                >
                  <h6
                    style={{
                      fontWeight: "600",
                      fontSize: "24px",
                      textAlign: "center",
                      marginBottom: "20px",
                      marginTop: "1.5rem",
                    }}
                  >
                    PHOTO/VIDEO CONSENT FORM
                  </h6>
                  <p>
                    Consent to appear in photographs and videotapes. Internal
                    use only.
                  </p>
                  <div className="form-field-update">
                    <div className="form-field-child">
                      <label>Resident Name:</label>
                      <input
                        type="text"
                        id="AHCCCS"
                        value={photoVideoConsentResidentName}
                        placeholder="Enter Name"
                        required
                        onChange={(e) =>
                          setPhotoVideoConsentResidentName(e.target.value)
                        }
                      />
                    </div>
                    <div className="form-field-child">
                      <label>Date of Birth:</label>
                      <input
                        type="date"
                        value={photoVideoConsentDateOfBirth}
                        placeholder="DD/MM/YYYY"
                        required
                        onChange={(e) =>
                          setPhotoVideoConsentDateOfBirth(e.target.value)
                        }
                      />
                    </div>
                    <div className="form-field-child">
                      <label>Admission Date:</label>
                      <input
                        type="date"
                        value={photoVideoConsentAdmissionDate}
                        placeholder="DD/MM/YYYY"
                        required
                        onChange={(e) =>
                          setPhotoVideoConsentAdmissionDate(e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <p style={{ color: "#000000" }}>
                    Agree to give{" "}
                    <span>
                   
                   <AutoSize value={companyName} setValue={setCompanyName} placeholder={"Company Name"}/>
                    </span>{" "}
                    the consent to appear in photographs and videotapes for the
                    purpose of identification and capturing memories from
                    activities. I understand that the photographs and videos
                    will only be displayed within the home it will never be made
                    or displayed in public. I understand that the photographs
                    and videos are for internal purposes only, meaning that
                    staff members and residents are the only individuals who
                    will see the photographs and videotapes.
                  </p>
                  <div className="yeschechbox2">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <input
                        type="checkbox"
                        id="photoVideoConsentConsentGiven"
                        checked={photoVideoConsentConsentGiven}
                        onChange={() =>
                          setPhotoVideoConsentConsentGiven(
                            !photoVideoConsentConsentGiven
                          )
                        }
                      />
                      <span htmlFor="photoVideoConsentConsentGiven">
                        {" "}
                        I DO give consent to appear in photographs and
                        videotapes.
                      </span>
                    </div>
                  </div>
                  <div className="yeschechbox2">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <input
                        type="checkbox"
                        id="photoVideoConsentConsentWithdrawn"
                        checked={photoVideoConsentConsentWithdrawn}
                        onChange={() =>
                          setPhotoVideoConsentConsentWithdrawn(
                            !photoVideoConsentConsentWithdrawn
                          )
                        }
                      />
                      <span htmlFor="photoVideoConsentConsentWithdrawn">
                        {" "}
                        I DO NOT give consent to appear in photographs and
                        videotapes.
                      </span>
                    </div>
                  </div>

              

                  <label
                    className="label-review-resitent"
                    style={{ fontWeight: "bold" }}
                  >
                    Resident Signature:
                  </label>
                  <div class="file-upload-box">
                    <div className="file-upload-box-child hidePrint">
                      <button
                        className="upload-button1"
                        type="button"
                        onClick={() => saveAndSignHandler()}
                      >
                        SAVED AS DRAFT
                      </button>
                      <button
                        className="upload-button"
                        type="button"
                        onClick={() => setSigInModel9(true)}
                      >
                        SAVED AND SIGNED
                      </button>
                    </div>
                    <div>
                      {photoVideoConsentResidentSignature && (
                        <p className="signature_name_print">
                          Digitally Sign by {photoVideoConsentResidentSignature}{" "}
                          {photoVideoConsentResidentDate}{" "}
                          {photoVideoConsentResidentTime}
                        </p>
                      )}
                    </div>
                  </div>

                  {signInModel9 && (
                    <SingInUpdateModel
                      onClose={() => setSigInModel9(false)}
                      singin={photoVideoConsentResidentSignature}
                      setSingIn={setPhotoVideoConsentResidentSignature}
                      setDateAndTime={setPhotoVideoConsentResidentDate}
                      setSignatureTime={setPhotoVideoConsentResidentTime}
                    />
                  )}

                 
                  <div className="form-field-single-update">
                    <label>Guardian/Representative Name:</label>
                    <input
                      type="text"
                      value={photoVideoConsentGuardianRepresentativeName}
                      placeholder="Enter Name"
                      required
                      onChange={(e) =>
                        setPhotoVideoConsentGuardianRepresentativeName(
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <label
                    style={{ fontWeight: "bold" }}
                    className="label-review-resitent"
                  >
                    Guardian/Representative Signature:
                  </label>
                  <div class="file-upload-box ">
                    <div className="file-upload-box-child hidePrint">
                      <div>
                        <button
                          className="upload-button1"
                          type="button"
                          onClick={() => saveAndSignHandler()}
                        >
                          SAVED AS DRAFT
                        </button>
                      </div>
                      <div>
                        <button
                          className="upload-button"
                          type="button"
                          onClick={() => setSigInModel10(true)}
                        >
                          SAVED AND SIGNED
                        </button>
                      </div>
                      <div>
                        <button
                          onClick={handlePrintUpdate3}
                          className="upload-button signature_shift_margin"
                          type="button"
                        >
                          PRINT THIS FORM
                        </button>
                      </div>
                    </div>
                    <div>
                      {photoVideoConsentGuardianRepresentativeSignature && (
                        <p className="signature_name_print">
                          Digitally Sign by{" "}
                          {photoVideoConsentGuardianRepresentativeSignature}{" "}
                          {photoVideoConsentGuardianRepresentativeDate}{" "}
                          {photoVideoConsentGuardianRepresentativeTime}
                        </p>
                      )}
                    </div>
                  </div>

                  {signInModel10 && (
                    <SingInUpdateModel
                      onClose={() => setSigInModel10(false)}
                      singin={photoVideoConsentGuardianRepresentativeSignature}
                      setSingIn={
                        setPhotoVideoConsentGuardianRepresentativeSignature
                      }
                      setDateAndTime={
                        setPhotoVideoConsentGuardianRepresentativeDate
                      }
                      setSignatureTime={setPhotoVideoConsentGuardianRepresentativeTime}
                    />
                  )}

            

                  <div className="form-actions-next hidePrint">
                    {page !== 1 && (
                      <div>
                        <button
                          type="button"
                          className="initalsubmitRisistent"
                          onClick={handlePrevPage}
                        >
                          Prev Page
                        </button>
                      </div>
                    )}

                    {page !== 8 && (
                      <div>
                        <button
                          type="button"
                          className="initalsubmitRisistent"
                          onClick={handleNextPage}
                        >
                          Next Page
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}

            {/* section4 */}
            {page === 4 && (
              <>
                <div
                  ref={componentRef4}
                 className="increase-print-width"
                >
                  <h6
                    style={{
                      fontWeight: "600",
                      fontSize: "24px",
                      textAlign: "center",
                      marginBottom: "20px",
                      marginTop: "1.5rem",
                    }}
                  >
                    ADVANCED DIRECTIVE FORM
                  </h6>
                  <h6
                    style={{
                      fontWeight: "400",
                      fontSize: "18px",
                      textAlign: "center",
                      marginBottom: "20px",
                    }}
                  >
                    THIS FORM MUST BE COMPLETED AND PROMINENTLY DISPLAYED IN THE
                    MEMBER MEDICAL RECORD
                  </h6>

                  <div className="box-image-container">
                    <div className="form-field-update">
                      <div className="form-field-child">
                        <label>Resident Name:</label>
                        <input
                          type="text"
                          value={advanceDirectivesResidentName}
                          placeholder="Enter Name"
                          required
                          onChange={(e) =>
                            setAdvanceDirectivesResidentName(e.target.value)
                          }
                        />
                      </div>
                      <div className="form-field-child">
                        <label>Select Gender:</label>
                        <div className="genderdiv">
                          <div className="genderbox">
                            <input
                              type="radio"
                              id="maleRadio"
                              name="gender"
                              value="male"
                              checked={
                                advanceDirectivesResidentGender === "male"
                              }
                              onChange={() =>
                                setAdvanceDirectivesResidentGender("male")
                              }
                              className="custom-radio"
                            />
                            <label htmlFor="maleRadio">Male</label>
                          </div>
                          <div className="genderbox">
                            <input
                              type="radio"
                              id="femaleRadio"
                              name="gender"
                              value="female"
                              checked={
                                advanceDirectivesResidentGender === "female"
                              }
                              onChange={() =>
                                setAdvanceDirectivesResidentGender("female")
                              }
                              className="custom-radio"
                            />
                            <label htmlFor="femaleRadio">Female</label>
                          </div>
                        </div>
                      </div>
                      <div className="form-field-child">
                        <label>Date of Birth:</label>
                        <input
                          type="date"
                          value={advanceDirectivesResidentDateOfBirth}
                          placeholder="DD/MM/YYYY"
                          required
                          onChange={(e) =>
                            setAdvanceDirectivesResidentDateOfBirth(
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                    <div className="border-bootom-line"></div>
                    <div className="form-field-update">
                      <div className="form-field-child">
                        <label>
                          Address:
                        </label>
                        <input
                          type="text"
                          value={advanceDirectivesResidentAddress}
                          placeholder="Enter Address"
                          required
                          onChange={(e) =>
                            setAdvanceDirectivesResidentAddress(e.target.value)
                          }
                        />
                      </div>
                      <div className="form-field-child">
                        <label >Date:</label>
                        <input
                          type="date"
                          value={advanceDirectivesResidentDate}
                          placeholder="DD/MM/YYYY"
                          required
                          onChange={(e) =>
                            setAdvanceDirectivesResidentDate(e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="formsheading">
                    <h6>Advance Directives Information</h6>
                    <p>
                      I have been provided information and verbal explanation
                      about Advance Directive. Member initials{" "}
                      <span>
                    
                    <AutoSize  value={advanceDirectivesProvidedInfoInitials} setValue={setAdvanceDirectivesProvidedInfoInitials} placeholder={"____________"}/>
                      </span>
                      Date{" "}
                      <span>
                      
                    <AutoSize type="date" value={advanceDirectivesProvidedInfoDate} setValue={setAdvanceDirectivesProvidedInfoDate} placeholder={"____________"}/>
                      </span>
                      <p>
                        Resident is refusing advance directives. Member initials
                        <span>
                    
                      <AutoSize  value={advanceDirectivesProvidedInfoRefusingInitials} setValue={setAdvanceDirectivesProvidedInfoRefusingInitials} placeholder={"____________"}/>
                        </span>
                        Date{" "}
                        <span>
                       
                      <AutoSize type="date" value={advanceDirectivesProvidedInfoRefusingDate} setValue={setAdvanceDirectivesProvidedInfoRefusingDate} placeholder={"____________"}/>
                        </span>
                      </p>
                    </p>
                  </div>
                  <div className="formsheading">
                    <h6>Advance Directives Development</h6>
                  </div>
                  <div className="yeschechbox2">
                    <span>Resident has developed an Advanced Directive:</span>
                    <div
                    
                    >
                      <input
                        type="checkbox"
                        id="yesRadio"
                        name="option"
                        value="yes"
                        checked={advanceDirectivesDeveloped === "yes"}
                        onChange={() => setAdvanceDirectivesDeveloped("yes")}
                      />
                      <span htmlFor="yesRadio" style={{ marginBottom: "5px" }}>
                        Yes
                      </span>
                    </div>
                    <div
                   
                    >
                      <input
                        type="checkbox"
                        id="noRadio"
                        name="option"
                        value="no"
                        checked={advanceDirectivesDeveloped === "no"}
                        onChange={() => setAdvanceDirectivesDeveloped("no")}
                      />
                      <span htmlFor="noRadio" style={{ marginBottom: "5px" }}>
                        No
                      </span>
                    </div>
                  </div>
                  {advanceDirectivesDeveloped === "no" && (
                    <input
                      style={{ marginBottom: "1rem" }}
                      type="text"
                      placeholder="Please enter"
                      value={advanceDirectivesDevelopedComment}
                      onChange={(e) =>
                        setAdvanceDirectivesDevelopedComment(e.target.value)
                      }
                    />
                  )}
                  <div className="yeschechbox2">
                    <span>
                      If No, stop and let Resident know that assistance in
                      developing an Advanced Directive is available.
                    </span>
                  </div>
                  <div className="yeschechbox2">
                    <span>
                      If the Advanced Directive has been executed (developed),
                      is it in the BHRF medical record?
                    </span>
                    <div className="button_gap">
                      <input
                        type="checkbox"
                        id="yesCheckbox"
                        checked={advanceDirectivesExecutedInRecord === "yes"}
                        onChange={() =>
                          setAdvanceDirectivesExecutedInRecord("yes")
                        }
                      />
                      <span htmlFor="yesCheckbox" style={{ marginBottom: "5px" }}>Yes</span>
                    </div>
                    <div >
                      <input
                        type="checkbox"
                        id="noCheckbox"
                        checked={advanceDirectivesExecutedInRecord === "no"}
                        onChange={() =>
                          setAdvanceDirectivesExecutedInRecord("no")
                        }
                      />
                      <span htmlFor="noCheckbox" style={{ marginBottom: "5px" }}>No</span>
                    </div>
                  </div>
                  {advanceDirectivesExecutedInRecord === "no" && (
                    <input
                      type="text"
                      style={{ marginBottom: "1rem" }}
                      placeholder="Please enter"
                      value={advanceDirectivesExecutedInRecordComment}
                      onChange={(e) =>
                        setAdvanceDirectivesExecutedInRecordComment(
                          e.target.value
                        )
                      }
                    />
                  )}
                  <div className="yeschechbox2">
                    <span>
                      If the Advanced Directive has been executed, but not filed
                      in the BHRF medical record, please check the applicable
                      box below:
                    </span>
                  </div>
                  <div className="yeschechbox2">
                    <div
                    
                    >
                      <input
                        type="checkbox"
                        id="exampleCheckbox"
                        checked={advanceDirectivesFilingStatusWishNotFiled}
                        onChange={() =>
                          setAdvanceDirectivesFilingStatusWishNotFiled(
                            !advanceDirectivesFilingStatusWishNotFiled
                          )
                        }
                      />
                      <span htmlFor="advanceDirectivesFilingStatusWishNotFiled" style={{ marginBottom: "5px" }}>
                        Resident does not wish to have it filed in his/her
                        medical record.
                      </span>
                    </div>
                  </div>
                  <div className="yeschechbox2">
                    <div
                    
                    >
                      <input
                        type="checkbox"
                        id="exampleCheckbox"
                        checked={
                          advanceDirectivesFilingStatusAskedForCopyNotProvided
                        }
                        onChange={() =>
                          setAdvanceDirectivesFilingStatusAskedForCopyNotProvided(
                            !advanceDirectivesFilingStatusAskedForCopyNotProvided
                          )
                        }
                      />
                      <span style={{ marginBottom: "5px" }}>
                        BHRF has asked for a copy, but it has not been provided.
                      </span>
                    </div>
                  </div>
                  <div className="yeschechbox2">
                    <div
                  
                    >
                      <input
                        type="checkbox"
                        id="exampleCheckbox"
                        checked={advanceDirectivesFilingStatusOther}
                        onChange={() =>
                          setAdvanceDirectivesFilingStatusOther(
                            !advanceDirectivesFilingStatusOther
                          )
                        }
                      />
                       <span style={{ marginBottom: "5px" }}>Other</span>
                    </div>
                  </div>
                  <div className="yeschechbox2">
                    <div>
                      <span>To facilitate coordination of care:</span>
                    </div>
                  </div>
                  <div className="yeschechbox2">
                    <div>
                      <span>
                        Has a copy of an executed Advanced Directive or refusal
                        been sent to the Member’s PCP?
                      </span>
                    </div>
                    <div >
                      <input
                        type="checkbox"
                        id="yesCheckbox"
                        checked={
                          advanceDirectivesCoordinationOfCareCopySentToPCP ===
                          "yes"
                        }
                        onChange={() =>
                          setAdvanceDirectivesCoordinationOfCareCopySentToPCP(
                            "yes"
                          )
                        }
                      />
                      <span htmlFor="yesCheckbox" style={{ marginBottom: "5px" }}>Yes</span>
                    </div>
                    <div className="button_gap ">
                      <input
                        type="checkbox"
                        id="noCheckbox"
                        checked={
                          advanceDirectivesCoordinationOfCareCopySentToPCP ===
                          "no"
                        }
                        onChange={() =>
                          setAdvanceDirectivesCoordinationOfCareCopySentToPCP(
                            "no"
                          )
                        }
                      />
                      <span htmlFor="noCheckbox" style={{ marginBottom: "5px" }}>No</span>
                    </div>
                  </div>
                  <div className="yeschechbox2">
                    <div>
                      <span>
                        Has the Advance Directive document ever been acted on?
                      </span>
                    </div>
                    <div className="button_gap ">
                      <input
                        type="checkbox"
                        id="yesCheckbox"
                        checked={
                          advanceDirectivesCoordinationOfCareActedOn === "yes"
                        }
                        onChange={() =>
                          setAdvanceDirectivesCoordinationOfCareActedOn("yes")
                        }
                      />
                      <span htmlFor="yesCheckbox" style={{ marginBottom: "5px" }}>Yes</span>
                    </div>
                    <div className="button_gap ">
                      <input
                        type="checkbox"
                        id="noCheckbox"
                        checked={
                          advanceDirectivesCoordinationOfCareActedOn === "no"
                        }
                        onChange={() =>
                          setAdvanceDirectivesCoordinationOfCareActedOn("no")
                        }
                      />
                      <span htmlFor="noCheckbox" style={{ marginBottom: "5px" }}>No</span>
                    </div>
                  </div>
                  <div className="yeschechbox2">
                    <div>
                      <span>
                        If Yes, have all appropriate parties been notified?
                      </span>
                    </div>
                  </div>
                  <div className="yeschechbox2">
                    <div>
                      <span>Yes (Specify who)</span>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="yesCheckbox"
                        checked={
                          advanceDirectivesCoordinationOfCareAppropriatePartiesNotified ===
                          "yes"
                        }
                        onChange={() =>
                          setAdvanceDirectivesCoordinationOfCareAppropriatePartiesNotified(
                            "yes"
                          )
                        }
                      />
                      {advanceDirectivesCoordinationOfCareAppropriatePartiesNotified ===
                        "yes" && (
                        <input
                          type="text"
                          style={{ outline: "none", border: "none" }}
                          placeholder="__________________"
                          value={
                            advanceDirectivesCoordinationOfCareAppropriatePartiesNotifiedComment
                          }
                          onChange={(e) =>
                            setAdvanceDirectivesCoordinationOfCareAppropriatePartiesNotifiedComment(
                              e.target.value
                            )
                          }
                        />
                      )}
                      {/* <span>
                  (Specify who)________________________________________________{" "}
                </span> */}
                    </div>
                  </div>
                  <div className="yeschechbox2">
                    <div>
                      <span>No (Describe why) </span>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="noCheckbox"
                        checked={
                          advanceDirectivesCoordinationOfCareAppropriatePartiesNotified ===
                          "no"
                        }
                        onChange={() =>
                          setAdvanceDirectivesCoordinationOfCareAppropriatePartiesNotified(
                            "no"
                          )
                        }
                      />
                      {advanceDirectivesCoordinationOfCareAppropriatePartiesNotified ===
                        "no" && (
                        <input
                          type="text"
                          style={{ outline: "none", border: "none" }}
                          placeholder="__________________"
                          value={
                            advanceDirectivesCoordinationOfCareAppropriatePartiesNotifiedComment
                          }
                          onChange={(e) =>
                            setAdvanceDirectivesCoordinationOfCareAppropriatePartiesNotifiedComment(
                              e.target.value
                            )
                          }
                        />
                      )}
                    </div>
                  </div>
                  <div class="file-upload-box hidePrint" style={{marginTop:"0.5rem"}}>
                    <div className="file-upload-box-child ">
                      <div>
                        <button
                          className="upload-button1"
                          type="button"
                          onClick={() => saveAndSignHandler()}
                        >
                          SAVED AS DRAFT
                        </button>
                      </div>

                      <div>
                        <button
                          onClick={handlePrintUpdate4}
                          className="upload-button signature_shift_margin"
                          type="button"
                        >
                          PRINT THIS FORM
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="form-actions-next hidePrint">
                    {page !== 1 && (
                      <div>
                        <button
                          type="button"
                          className="initalsubmitRisistent"
                          onClick={handlePrevPage}
                        >
                          Prev Page
                        </button>
                      </div>
                    )}

                    {page !== 8 && (
                      <div>
                        <button
                          type="button"
                          className="initalsubmitRisistent"
                          onClick={handleNextPage}
                        >
                          Next Page
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}

            {/* section 5 */}
            {page === 5 && (
              <>
                <div
                  ref={componentRef5}
                className="increase-print-width"
                >
                  <h6
                    style={{
                      fontWeight: "600",
                      fontSize: "24px",
                      textAlign: "center",
                      marginBottom: "20px",
                    }}
                  >
                    Acknowledgement Of Complaint Process
                  </h6>
                  <p style={{ color: "#000000" }}>
                    I,{" "}
                    <span>
                   
                  <AutoSize value={complaintProcessAcknowledgementCompany} setValue={setComplaintProcessAcknowledgementCompany} placeholder={"____________"}/>
                    </span>
                    have been explained by facility staff of the facility
                    resident complaint process. Resident/Guardian understands
                    that they have the right to file complaint with the
                    facility, and with the Arizona Department of Residential
                    Licensing when complaint can not be resolved with the
                    facility.
                  </p>

                    <div style={{lineHeight:"10px"}}>
                  <p style={{ color: "#000000" }}>

                  <p >Bureau of Behavioral Health Facilities Licensing</p>
                  <p>150 N. 18th Ave, Suite 420</p> 
                  <p>Phoenix AZ, 85007</p>
                  </p>
                  <p style={{ color: "#000000" }}>
                    <a
                      target="_blank"
                      href="BehavioralHealth.Licensing@azdhs.gov"
                    >
                      BehavioralHealth.Licensing@azdhs.gov
                    </a>
                  </p>
                  <p>Phone Number : 602-542-3422</p>
                  <p style={{ color: "#000000" }}>
                    By signing below, resident acknowledge to have been informed
                    of the complaint process.
                  </p>
                  </div>

                  {/* <label
              htmlFor=""
              style={{
                marginRight: "50px",
                fontWeight: "500",
                fontSize: "16px",
                color: "#000000",
              }}
            >
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              value={complaintProcessAcknowledgementResidentName}
              onChange={(e) =>
                setComplaintProcessAcknowledgementResidentName(e.target.value)
              }
            /> */}
                  <label
                    className="label-review-resitent"
                    style={{ fontWeight: "bold" }}
                  >
                    Resident Signature:
                  </label>
                  <div class="file-upload-box ">
                    <div className="file-upload-box-child hidePrint">
                      <button
                        className="upload-button1"
                        type="button"
                        onClick={() => saveAndSignHandler()}
                      >
                        SAVED AS DRAFT
                      </button>
                      <button
                        className="upload-button"
                        type="button"
                        onClick={() => setSigInModel11(true)}
                      >
                        SAVED AND SIGNED
                      </button>
                    </div>
                    <div>
                      {complaintProcessAcknowledgementResidentSignature && (
                        <p className="signature_name_print">
                          Digitally Sign by{" "}
                          {complaintProcessAcknowledgementResidentSignature}{" "}
                          {complaintProcessAcknowledgementResidentDate}{" "}
                          {complaintProcessAcknowledgementResidentTime}
                        </p>
                      )}
                    </div>
                  </div>

                  {signInModel11 && (
                    <SingInUpdateModel
                      onClose={() => setSigInModel11(false)}
                      singin={complaintProcessAcknowledgementResidentSignature}
                      setSingIn={
                        setComplaintProcessAcknowledgementResidentSignature
                      }
                      setDateAndTime={
                        setComplaintProcessAcknowledgementResidentDate
                      }
                      setSignatureTime={setComplaintProcessAcknowledgementResidentTime}
                    />
                  )}

               

                  <div className="form-field-single-update">
                    <label>Guardian/Representative Name:</label>
                    <input
                      type="text"
                      value={
                        complaintProcessAcknowledgementGuardianRepresentativeName
                      }
                      placeholder="Enter text"
                      required
                      onChange={(e) =>
                        setComplaintProcessAcknowledgementGuardianRepresentativeName(
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <label
                    className="label-review-resitent"
                    style={{ fontWeight: "bold" }}
                  >
                    Guardian/Representative Signature:
                  </label>
                  <div class="file-upload-box ">
                    <div className="file-upload-box-child hidePrint">
                      <div>
                        <button
                          className="upload-button1"
                          type="button"
                          onClick={() => saveAndSignHandler()}
                        >
                          SAVED AS DRAFT
                        </button>
                      </div>
                      <div>
                        <button
                          className="upload-button"
                          type="button"
                          onClick={() => setSigInModel12(true)}
                        >
                          SAVED AND SIGNED
                        </button>
                      </div>
                      <div>
                        <button
                          onClick={handlePrintUpdate5}
                          className="upload-button signature_shift_margin"
                          type="button"
                        >
                          PRINT THIS FORM
                        </button>
                      </div>
                    </div>
                    <div>
                      {complaintProcessAcknowledgementGuardianRepresentativeSignature && (
                        <p className="signature_name_print">
                          Digitally Sign by{" "}
                          {
                            complaintProcessAcknowledgementGuardianRepresentativeSignature
                          }{" "}
                          {
                            complaintProcessAcknowledgementGuardianRepresentativeDate
                          }{" "}{complaintProcessAcknowledgementGuardianRepresentativeTime}
                        </p>
                      )}
                    </div>
                  </div>

                  {signInModel12 && (
                    <SingInUpdateModel
                      onClose={() => setSigInModel12(false)}
                      singin={
                        complaintProcessAcknowledgementGuardianRepresentativeSignature
                      }
                      setSingIn={
                        setComplaintProcessAcknowledgementGuardianRepresentativeSignature
                      }
                      setDateAndTime={
                        setComplaintProcessAcknowledgementGuardianRepresentativeDate
                      }
                      setSignatureTime={setComplaintProcessAcknowledgementGuardianRepresentativeTime}
                    />
                  )}


                  <div className="form-actions-next hidePrint">
                    {page !== 1 && (
                      <div>
                        <button
                          type="button"
                          className="initalsubmitRisistent"
                          onClick={handlePrevPage}
                        >
                          Prev Page
                        </button>
                      </div>
                    )}

                    {page !== 8 && (
                      <div>
                        <button
                          type="button"
                          className="initalsubmitRisistent"
                          onClick={handleNextPage}
                        >
                          Next Page
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}

            {/* section 6 */}
            {page === 6 && (
              <>
                <div
                  ref={componentRef6}
                 className="increase-print-width"
                >
                  <h6
                    style={{
                      fontWeight: "600",
                      fontSize: "24px",
                      textAlign: "center",
                      marginBottom: "20px",
                      marginTop: "1.5rem",
                    }}
                  >
                    ORIENTATION TO AGENCY
                  </h6>
                  <div className="Residentrights">
                    <p>
                      I,
                      <span>
                     
                    <AutoSize  value={orientationToAgencyCompany} setValue={setOrientationToAgencyCompany} placeholder={"____________"}/>
                      </span>
                      received an orientation by facility by staff. The
                      orientation included but not limited to the following:
                    </p>

                    <Select
                      isMulti
                      options={optionValue}
                      value={ORIENTATIONDropDown}
                      onChange={optionHandler}
                      isCreatable={true}
                      onKeyDown={handleKeyDownORIENTATIONDropDown}
                    />
           
                  </div>
                  <label
                    htmlFor=""
                    className="label-review-resitent"
                    style={{ fontWeight: "bold" }}
                  >
                    Resident Signature:
                  </label>
                  <div class="file-upload-box ">
                    <div className="file-upload-box-child hidePrint">
                      <button
                        className="upload-button1"
                        type="button"
                        onClick={() => saveAndSignHandler()}
                      >
                        SAVED AS DRAFT
                      </button>
                      <button
                        className="upload-button"
                        type="button"
                        onClick={() => setSigInModel13(true)}
                      >
                        SAVED AND SIGNED
                      </button>
                    </div>
                    <div>
                      {orientationToAgencyResidentSignature && (
                        <p className="signature_name_print">
                          Digitally Sign by{" "}
                          {orientationToAgencyResidentSignature}{" "}
                          {orientationToAgencyResidentDate}{" "}
                          {orientationToAgencyResidentTime}
                        </p>
                      )}
                    </div>
                  </div>

                  {signInModel13 && (
                    <SingInUpdateModel
                      onClose={() => setSigInModel13(false)}
                      singin={orientationToAgencyResidentSignature}
                      setSingIn={setOrientationToAgencyResidentSignature}
                      setDateAndTime={setOrientationToAgencyResidentDate}
                      setSignatureTime={setOrientationToAgencyResidentTime}
                    />
                  )}


                  <div className="form-field-single-update">
                    <label>Guardian/Representative Name:</label>
                    <input
                      type="text"
                      value={orientationToAgencyGuardianRepresentativeName}
                      placeholder="Enter text"
                      required
                      onChange={(e) =>
                        setOrientationToAgencyGuardianRepresentativeName(
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <label
                    className="label-review-resitent"
                    style={{ fontWeight: "bold" }}
                  >
                    Guardian/Representative Signature:
                  </label>
                  <div class="file-upload-box ">
                    <div className="file-upload-box-child hidePrint">
                      <div>
                        <button
                          className="upload-button1"
                          type="button"
                          onClick={() => saveAndSignHandler()}
                        >
                          SAVED AS DRAFT
                        </button>
                      </div>
                      <div>
                        <button
                          className="upload-button"
                          type="button"
                          onClick={() => setSigInModel14(true)}
                        >
                          SAVED AND SIGNED
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          onClick={handlePrintUpdate6}
                          className="upload-button signature_shift_margin"
                        >
                          PRINT THIS FORM
                        </button>
                      </div>
                    </div>
                    <div>
                      {orientationToAgencyGuardianRepresentativeSignature && (
                        <p className="signature_name_print">
                          Digitally Sign by{" "}
                          {orientationToAgencyGuardianRepresentativeSignature}{" "}
                          {orientationToAgencyGuardianRepresentativeDate}{" "}
                          {orientationToAgencyGuardianRepresentativeTime}
                        </p>
                      )}
                    </div>
                  </div>

                  {signInModel14 && (
                    <SingInUpdateModel
                      onClose={() => setSigInModel14(false)}
                      singin={
                        orientationToAgencyGuardianRepresentativeSignature
                      }
                      setSingIn={
                        setOrientationToAgencyGuardianRepresentativeSignature
                      }
                      setDateAndTime={
                        setOrientationToAgencyGuardianRepresentativeDate
                      }
                      setSignatureTime={setOrientationToAgencyGuardianRepresentativeTime}
                    />
                  )}

                  <div className="form-actions-next hidePrint">
                    {page !== 1 && (
                      <div>
                        <button
                          type="button"
                          className="initalsubmitRisistent"
                          onClick={handlePrevPage}
                        >
                          Prev Page
                        </button>
                      </div>
                    )}

                    {page !== 8 && (
                      <div>
                        <button
                          type="button"
                          className="initalsubmitRisistent"
                          onClick={handleNextPage}
                        >
                          Next Page
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}

            {/* section 7 */}
            {page === 7 && (
              <>
                <div
                  ref={componentRef7}
                  className="increase-print-width"
                >
                  <h6
                    style={{
                      fontWeight: "600",
                      fontSize: "24px",
                      textAlign: "center",
                      marginBottom: "20px",
                      marginTop: "1.5rem",
                    }}
                  >
                    Resident Lock Box Key Issue and Return Optional
                  </h6>
                  <div className="form-field-single-update">
                    <label>Resident’s Name:</label>

                    <input
                      type="text"
                      value={promotionTalkStrategicApproach}
                      placeholder="Enter Name"
                      required
                      onChange={(e) =>
                        setPromotionTalkStrategicApproach(e.target.value)
                      }
                    />
                  </div>

                  <div className="form-field-update">
                    <div className="form-field-child">
                      <label>Date Key Issued:</label>
                      <input
                        type="date"
                        value={lockBoxKeyIssueReturnDateKeyIssued}
                        placeholder="Enter Name"
                        required
                        onChange={(e) =>
                          setLockBoxKeyIssueReturnDateKeyIssued(e.target.value)
                        }
                      />
                    </div>
                    <div className="form-field-child">
                      <label>Date Key Returned:</label>
                      <input
                        type="date"
                        value={lockBoxKeyIssueReturnDateKeyReturned}
                        placeholder="Enter Name"
                        required
                        onChange={(e) =>
                          setLockBoxKeyIssueReturnDateKeyReturned(
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>

                  <div className="form-field-single-update">
                    <label>Address:</label>
                    <input
                      type="text"
                      value={lockBoxKeyIssueReturnAddress}
                      placeholder="Enter address"
                      required
                      onChange={(e) =>
                        setLockBoxKeyIssueReturnAddress(e.target.value)
                      }
                    />
                  </div>
                  <div
                    className="Residentrights"
                 
                  >
                    <p>
                      I,{" "}
                      <span>
                      
                     <AutoSize  value={lockBoxKeyIssueReturnResponsibleFor} setValue={setLockBoxKeyIssueReturnResponsibleFor} placeholder={"____________"}/>
                      </span>
                      will be responsible for my individual lock box key to
                      <span>
                        <span>
                        
                      <AutoSize  value={lockBoxKeyIssueReturnResponsibleForCorporation} setValue={setLockBoxKeyIssueReturnResponsibleForCorporation} placeholder={"____________"}/>
                        </span>
                      </span>{" "}
                      Corporation lock box located in my room. I will not give
                      my key to anyone except to staff upon request. I
                      understand that if I loose my key I will be charged a $
                      <span>
                        <span>
                    
                        <AutoSize type="number" value={lockBoxKeyIssueReturnCharged} setValue={setLockBoxKeyIssueReturnCharged} placeholder={"____________"}/>
                        </span>
                      </span>{" "}
                      re-key fee. I understand that upon my discharge from this
                      program I will return my key to the program.
                    </p>
                  </div>
                  {/* <label
              htmlFor=""
              className="label-review-resitent"
            >
              Resident Name:
            </label>
            <input
              placeholder="Name"
              value={lockBoxKeyIssueReturnResidentName}
              type="text"
              onChange={(e) =>
                setLockBoxKeyIssueReturnResidentName(e.target.value)
              }
            /> */}
                  <label
                    htmlFor=""
                    className="label-review-resitent"
                    style={{ fontWeight: "bold" }}
                  >
                    Resident Signature:
                  </label>
                  <div class="file-upload-box ">
                    <div className="file-upload-box-child hidePrint">
                      <button
                        className="upload-button1"
                        type="button"
                        onClick={() =>saveAndSignHandler()  }
                      >
                        SAVED AS DRAFT 
                      </button>
                      <button
                        className="upload-button"
                        type="button"
                        onClick={() => setSigInModel15(true)}
                      >
                        SAVED AND SIGNED
                      </button>
                    </div>
                    <div>
                      {lockBoxKeyIssueReturnResidentSignature && (
                        <p className="signature_name_print">
                          Digitally Sign by{" "}
                          {lockBoxKeyIssueReturnResidentSignature}{" "}
                          {lockBoxKeyIssueReturnResidentDate}{" "}
                          {lockBoxKeyIssueReturnResidentTime}
                        </p>
                      )}
                    </div>
                  </div>

                  {signInModel15 && (
                    <SingInUpdateModel
                      onClose={() => setSigInModel15(false)}
                      singin={lockBoxKeyIssueReturnResidentSignature}
                      setSingIn={setLockBoxKeyIssueReturnResidentSignature}
                      setDateAndTime={setLockBoxKeyIssueReturnResidentDate}
                      setSignatureTime={setLockBoxKeyIssueReturnResidentTime}
                    />
                  )}

                  <div className="form-field-single-update">
                    <label>Guardian/Representative Name:</label>
                    <input
                      type="text"
                      value={lockBoxKeyIssueReturnGuardianRepresentativeName}
                      placeholder="Enter text"
                      required
                      onChange={(e) =>
                        setLockBoxKeyIssueReturnGuardianRepresentativeName(
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <label
                    htmlFor=""
                    className="label-review-resitent"
                    style={{ fontWeight: "bold" }}
                  >
                    Guardian/Representative Signature:
                  </label>
                  <div class="file-upload-box ">
                    <div className="file-upload-box-child hidePrint">
                      <button
                        className="upload-button1"
                        type="button"
                        onClick={() => saveAndSignHandler()}
                      >
                        SAVED AS DRAFT
                      </button>
                      <button
                        className="upload-button"
                        type="button"
                        onClick={() => setSigInModel16(true)}
                      >
                        SAVED AND SIGNED
                      </button>
                    </div>
                    <div>
                      {lockBoxKeyIssueReturnGuardianRepresentativeSignature && (
                        <p className="signature_name_print">
                          Digitally Sign by{" "}
                          {lockBoxKeyIssueReturnGuardianRepresentativeSignature}{" "}
                          {lockBoxKeyIssueReturnGuardianRepresentativeDate}{" "}
                          {lockBoxKeyIssueReturnGuardianRepresentativeTime}
                        </p>
                      )}
                    </div>
                  </div>

                  {signInModel16 && (
                    <SingInUpdateModel
                      onClose={() => setSigInModel16(false)}
                      singin={
                        lockBoxKeyIssueReturnGuardianRepresentativeSignature
                      }
                      setSingIn={
                        setLockBoxKeyIssueReturnGuardianRepresentativeSignature
                      }
                      setDateAndTime={
                        setLockBoxKeyIssueReturnGuardianRepresentativeDate
                      }
                      setSignatureTime={setLockBoxKeyIssueReturnGuardianRepresentativeTime}
                    />
                  )}

                  <div className="form-field-single-update">
                    <label>Staff Witness:</label>
                    <input
                      type="text"
                      value={lockBoxKeyIssueReturnStaffName}
                      placeholder="Enter Name"
                      required
                      onChange={(e) =>
                        setLockBoxKeyIssueReturnStaffName(e.target.value)
                      }
                    />
                  </div>
                  <div className="form-field-single-update-bold">
                    <label>Signature Witness:</label>
                    <div class="file-upload-box ">
                      <div className="file-upload-box-child hidePrint">
                        <div>
                          <button
                            className="upload-button1"
                            type="button"
                            onClick={() => setDraftModel(true)}
                          >
                            SAVED AS DRAFT
                          </button>
                        </div>
                        <div>
                          <button
                            className="upload-button"
                            type="button"
                            onClick={() => setSigInModel17(true)}
                          >
                            SAVED AND SIGNED
                          </button>
                        </div>
                        <div>
                          <button
                            onClick={handlePrintUpdate7}
                            className="upload-button signature_shift_margin"
                            type="button"
                          >
                            PRINT THIS FORM
                          </button>
                        </div>
                      </div>
                      <div>
                        {lockBoxKeyIssueReturnStaffSignature && (
                          <p className="signature_name_print">
                            Digitally Sign by{" "}
                            {lockBoxKeyIssueReturnStaffSignature}{" "}
                            {lockBoxKeyIssueReturnStaffDate}{" "}
                            {lockBoxKeyIssueReturnStaffTime}
                          </p>
                        )}
                      </div>
                    </div>

                    {signInModel17 && (
                      <SingInUpdateModel
                        onClose={() => setSigInModel17(false)}
                        singin={lockBoxKeyIssueReturnStaffSignature}
                        setSingIn={setLockBoxKeyIssueReturnStaffSignature}
                        setDateAndTime={setLockBoxKeyIssueReturnStaffDate}
                        setSignatureTime={setLockBoxKeyIssueReturnStaffTime}
                      />
                    )}
                  </div>

                  <div className="form-actions-next hidePrint">
                    {page !== 1 && (
                      <div>
                        <button
                          type="button"
                          className="initalsubmitRisistent"
                          onClick={handlePrevPage}
                        >
                          Prev Page
                        </button>
                      </div>
                    )}

                    {page !== 8 && (
                      <div>
                        <button
                          type="button"
                          className="initalsubmitRisistent"
                          onClick={handleNextPage}
                        >
                          Next Page
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}

            {/* section 8 */}
            {page === 8 && (
              <>
                <div
                  ref={componentRef8}
                  className="increase-print-width"
                >
                  <h6
                    style={{
                      fontWeight: "600",
                      fontSize: "16px",
                      textAlign: "center",
                      marginBottom: "20px",
                      marginTop: "1.5rem",
                    }}
                  >
                    INSURANCE INFORMATION
                  </h6>
                  <div className="Residentrights">
                    <p style={{ fontWeight: "bold" }}>Primary Insurance:</p>
                    <p>
                      Name of Policyholder{" "}
                      <span>
                        <span>
                     
                        <AutoSize  value={insuranceInformationPrimaryInsurancePolicyholderName} setValue={setInsuranceInformationPrimaryInsurancePolicyholderName} placeholder={"____________"}/>
                        </span>
                      </span>{" "}
                      Policy holder Date of Birth{" "}
                      <span>
                     
                    <AutoSize type="date" value={insuranceInformationPrimaryInsurancePolicyholderDateOfBirth} setValue={setInsuranceInformationPrimaryInsurancePolicyholderDateOfBirth} placeholder={"____________"}/>
                      </span>
       
                    </p>
                    <p>
                      Policyholder Address (if different than Resident)
                      <span>
                    
                     <AutoSize value={insuranceInformationPrimaryInsurancePolicyholderAddress} setValue={setInsuranceInformationPrimaryInsurancePolicyholderAddress} placeholder={"____________"}/>
                      </span>
                    </p>
                    <p>
                      City:
                      <span>
                     
                     <AutoSize value={insuranceInformationPrimaryInsurancePolicyholderCity} setValue={setInsuranceInformationPrimaryInsurancePolicyholderCity} placeholder={"____________"}/>
                      </span>
                      State:
                      <span>
                     
                     <AutoSize value={insuranceInformationPrimaryInsurancePolicyholderState} setValue={setInsuranceInformationPrimaryInsurancePolicyholderState} placeholder={"____________"}/>
                      </span>
                      Zip:
                      <span>
                     
                     <AutoSize value={insuranceInformationPrimaryInsurancePolicyholderZip} setValue={setInsuranceInformationPrimaryInsurancePolicyholderZip} placeholder={"____________"}/>
                      </span>
                    </p>
                    <p>
                      Phone Number
                      <span>
                   
                     <AutoSize value={insuranceInformationPrimaryInsurancePolicyholderPhone} setValue={setInsuranceInformationPrimaryInsurancePolicyholderPhone} placeholder={"____________"}/>
                      </span>
                    </p>
                    <p>
                      Policyholder Relationship to Resident
                      <span>
                      
                    <AutoSize value={insuranceInformationPrimaryInsurancePolicyholderRelationship} setValue={setInsuranceInformationPrimaryInsurancePolicyholderRelationship} placeholder={"____________"}/>
                      </span>
                    </p>
                    <p>
                      Insurance Company Name
                      <span>
                 
                    <AutoSize value={insuranceInformationPrimaryInsuranceCompany} setValue={setInsuranceInformationPrimaryInsuranceCompany} placeholder={"____________"}/>
                      </span>
                    </p>
                    <p>
                      Customer Service Phone Number
                      <span>
                  
                    <AutoSize value={insuranceInformationPrimaryInsuranceCustomerServicePhone} setValue={setInsuranceInformationPrimaryInsuranceCustomerServicePhone} placeholder={"____________"}/>
                      </span>
                    </p>
                    <p>
                      Subscriber #{" "}
                      <span>
                  
                    <AutoSize value={insuranceInformationPrimaryInsuranceSubscriberNumber} setValue={setInsuranceInformationPrimaryInsuranceSubscriberNumber} placeholder={"____________"}/>
                      </span>
                      Group#{" "}
                      <span>
                     
                     <AutoSize value={insuranceInformationPrimaryInsuranceSubscriberGroup} setValue={setInsuranceInformationPrimaryInsuranceSubscriberGroup} placeholder={"____________"}/>
                      </span>
                      Effective Date{" "}
                      <span>
                  
                     <AutoSize  type="date" value={insuranceInformationPrimaryInsuranceSubscriberEffectiveDate} setValue={setInsuranceInformationPrimaryInsuranceSubscriberEffectiveDate} placeholder={"____________"}/>
                      </span>
                    </p>
                    <p>
                      Secondary Insurance Name of Policyholder{" "}
                      <span>
                 
                     <AutoSize value={insuranceInformationSecondaryInsurancePolicyholderName} setValue={setInsuranceInformationSecondaryInsurancePolicyholderName} placeholder={"____________"}/>
                      </span>
                      Policy holder Date of Birth{" "}
                      <span>
                  
                     <AutoSize  type="date" value={insuranceInformationSecondaryInsurancePolicyholderDateOfBirth} setValue={setInsuranceInformationSecondaryInsurancePolicyholderDateOfBirth} placeholder={"____________"}/>
                      </span>
                    </p>
                    <p>
                      Policyholder Address (if different than Resident)
                      <span>
                  
                     <AutoSize value={insuranceInformationSecondaryInsurancePolicyholderAddress} setValue={setInsuranceInformationSecondaryInsurancePolicyholderAddress} placeholder={"____________"}/>
                      </span>
                    </p>
                    <p>
                      City:
                      <span>
                
                     <AutoSize value={insuranceInformationSecondaryInsurancePolicyholderCity} setValue={setInsuranceInformationSecondaryInsurancePolicyholderCity} placeholder={"____________"}/>
                      </span>
                      State:
                      <span>
                 
                     <AutoSize value={insuranceInformationSecondaryInsurancePolicyholderState} setValue={setInsuranceInformationSecondaryInsurancePolicyholderState} placeholder={"____________"}/>
                      </span>
                      Zip
                      <span>
             
                     <AutoSize value={insuranceInformationSecondaryInsurancePolicyholderZip} setValue={setInsuranceInformationSecondaryInsurancePolicyholderZip} placeholder={"____________"}/>
                      </span>
                    </p>
                    <p>
                      Phone Number
                      <span>
                     
                     <AutoSize value={insuranceInformationSecondaryInsurancePolicyholderPhone} setValue={setInsuranceInformationSecondaryInsurancePolicyholderPhone} placeholder={"____________"}/>
                      </span>
                    </p>
                    <p>
                      Policyholder Relationship to Resident
                      <span>
                
                     <AutoSize value={insuranceInformationSecondaryInsurancePolicyholderRelationship} setValue={setInsuranceInformationSecondaryInsurancePolicyholderRelationship} placeholder={"____________"}/>
                      </span>
                      <span></span>
                    </p>
                    <p>
                      Insurance Company Name{" "}
                      <span>
                
                     <AutoSize value={insuranceInformationSecondaryInsuranceCompany} setValue={setInsuranceInformationSecondaryInsuranceCompany} placeholder={"____________"}/>
                      </span>
                    </p>
                    <p>
                      Customer Service Phone Number
                      <span>
                  
                     <AutoSize value={insuranceInformationSecondaryInsuranceCustomerServicePhone} setValue={setInsuranceInformationSecondaryInsuranceCustomerServicePhone} placeholder={"____________"}/>
                      </span>
                    </p>
                    <p>
                      Subscriber #
                      <span>
              
                     <AutoSize value={insuranceInformationSecondaryInsuranceSubscriberNumber} setValue={setInsuranceInformationSecondaryInsuranceSubscriberNumber} placeholder={"____________"}/>
                      </span>
                      Group#{" "}
                      <span>
          
                     <AutoSize value={insuranceInformationSecondaryInsuranceSubscriberGroup} setValue={setInsuranceInformationSecondaryInsuranceSubscriberGroup} placeholder={"____________"}/>
                      </span>
                      Effective Date{" "}
                      <span>
                  
                     <AutoSize type="date" value={insuranceInformationSecondaryInsuranceSubscriberEffectiveDate} setValue={setInsuranceInformationSecondaryInsuranceSubscriberEffectiveDate} placeholder={"____________"}/>
                      </span>
                    </p>
                    <p>
                      OBLIGATIONS OF RESPONSIBLE PARTY: Our facility files for
                      reimbursement with your insurance company. However, the
                      ultimate responsibility for your account is yours.
                      Insurance billing is a courtesy, and the facility does not
                      accept the responsibility for collection of your claim or
                      of negotiating a settlement on a disputed claim. If the
                      Resident is responsible for a balance due, you will
                      receive monthly statements.
                    </p>
                    <p>
                      ASSIGNMENT OF BENEFITS: I hereby authorize this facility
                      to release the minimum medical information necessary to
                      process my insurance claims. I further authorize the above
                      insurance company(s) to make payment directly to the
                      provider for the benefits herein and otherwise payable to
                      me.
                    </p>
                  </div>
                  {/* <div className="form-field">
              <label className="label-review-resitent">Guardian/Representative Name:</label>
              <input
                type="text"
                id="AHCCCS"
                value={obligationsAndAuthorizationResidentName}
                placeholder="Enter Name"
                required
                onChange={(e) =>
                  setObligationsAndAuthorizationResidentName(e.target.value)
                }
              />
            </div> */}
                  <label
                    htmlFor=""
                    className="label-review-resitent"
                    style={{ fontWeight: "bold" }}
                  >
                    Resident Signature:
                  </label>
                  <div class="file-upload-box ">
                    <div className="file-upload-box-child hidePrint">
                      <button
                        className="upload-button1"
                        type="button"
                        onClick={() =>saveAndSignHandler() }
                      >
                        SAVED AS DRAFT
                      </button>
                      <button
                        className="upload-button"
                        type="button"
                        onClick={() => setSigInModel18(true)}
                      >
                        SAVED AND SIGNED
                      </button>
                    </div>
                    <div>
                      {obligationsAndAuthorizationResidentSignature && (
                        <p className="signature_name_print">
                          Digitally Sign by{" "}
                          {obligationsAndAuthorizationResidentSignature}{" "}
                          {obligationsAndAuthorizationResidentDate}{" "}
                          {obligationsAndAuthorizationResidentTime}
                        </p>
                      )}
                    </div>
                  </div>

                  {signInModel18 && (
                    <SingInUpdateModel
                      onClose={() => setSigInModel18(false)}
                      singin={obligationsAndAuthorizationResidentSignature}
                      setSingIn={
                        setObligationsAndAuthorizationResidentSignature
                      }
                      setDateAndTime={
                        setObligationsAndAuthorizationResidentDate
                      }
                      setSignatureTime={setObligationsAndAuthorizationResidentTime}
                    />
                  )}

                  <div className="form-field-single-update">
                    <label>Guardian/Representative Name:</label>
                    <input
                      type="text"
                      value={
                        obligationsAndAuthorizationGuardianRepresentativeName
                      }
                      placeholder="Enter Name"
                      required
                      onChange={(e) =>
                        setObligationsAndAuthorizationGuardianRepresentativeName(
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <label
                    htmlFor=""
                    className="label-review-resitent"
                    style={{ fontWeight: "bold" }}
                  >
                    Guardian/Representative Signature:
                  </label>
                  <div class="file-upload-box ">
                    <div className="file-upload-box-child hidePrint">
                      <div>
                        <button
                          className="upload-button1"
                          type="button"
                          onClick={() => saveAndSignHandler()}
                        >
                          SAVED AS DRAFT
                        </button>
                      </div>
                      <div>
                        <button
                          className="upload-button"
                          type="button"
                          onClick={() => setSigInModel19(true)}
                        >
                          SAVED AND SIGNED
                        </button>
                      </div>
                      <div>
                        <button
                          onClick={handlePrintUpdate8}
                          className="upload-button signature_shift_margin"
                          type="button"
                        >
                          PRINT THIS FORM
                        </button>
                      </div>
                 
                    </div>
                    <div>
                      {obligationsAndAuthorizationGuardianRepresentativeSignature && (
                        <p className="signature_name_print">
                          Digitally Sign by{" "}
                          {
                            obligationsAndAuthorizationGuardianRepresentativeSignature
                          }{" "}
                          {
                            obligationsAndAuthorizationGuardianRepresentativeDate
                          }{" "} {obligationsAndAuthorizationGuardianRepresentativeTime}
                        </p>
                      )}
                    </div>
                  </div>

                  {signInModel19 && (
                    <SingInUpdateModel
                      onClose={() => setSigInModel19(false)}
                      singin={
                        obligationsAndAuthorizationGuardianRepresentativeSignature
                      }
                      setSingIn={
                        setObligationsAndAuthorizationGuardianRepresentativeSignature
                      }
                      setDateAndTime={
                        setObligationsAndAuthorizationGuardianRepresentativeDate
                      }
                      setSignatureTime={setObligationsAndAuthorizationGuardianRepresentativeTime}
                    />
                  )}

                  <div className="form-actions-next hidePrint">
                    {page !== 1 && (
                      <div>
                        <button
                          type="button"
                          className="initalsubmitRisistent"
                          onClick={handlePrevPage}
                        >
                          Prev Page
                        </button>
                      </div>
                    )}

                    {page !== 8 && (
                      <div>
                        <button
                          type="button"
                          className="initalsubmitRisistent"
                          onClick={handleNextPage}
                        >
                          Next Page
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
            {  page===8 && 
               <div className="form-actions">
              <button type="submit"  style={{padding:"5px 20px", border:"none",outline:"none",backgroundColor:"#1A9FB2",borderRadius:"5px",marginBottom:"2.5rem",textAlign:"center",marginTop:"1.5rem"}} >
              SUBMIT DETAILS
            </button>
            {
              filedForm &&   <button type="button" onClick={()=>setPreviusData(!previusData)} style={{padding:"5px 20px", border:"none",outline:"none",backgroundColor:"#1A9FB2",borderRadius:"5px",marginBottom:"2.5rem",textAlign:"center",marginTop:"1.5rem"}} >
            
              {
                    loading ? <Loader/> : "PREVIOUS FORM"
                  }
            </button>
            }
             </div>
            }
              
          </form>
        </div>
        {draftModel && <Draftinmodel onClose={() => setDraftModel(false)} />}
      </div>
    </>
  );
};

export default ResidentIntakes;
