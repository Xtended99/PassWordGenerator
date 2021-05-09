



/* Please see the main index.html for the source of the code included in this JavaScript file.
 * Thank You 
 *    Angel Sosa
 * Below you will find several comments describing the different pieces of the this JavaScript file.
 */

// The following two variable are used to collect the password length from the prompt dialog box.

total_p_length = 0;
user_p_length = 0;

// enx holds the final result of the generated password

enx = "";

// The selected array holds the selected character types to generate the password with

selected_character_types = [];

// All character types array is the available character types.

all_character_types = [ "all", "upper", "lower", "special", "numeric" ];

// Below are five arrays comprising of each of character type that can be used and for simplification purposes 
// an all encompassing array array is their to help the user not having to select each character type.

all_p_items = [ "!", 1, "A", "Q", "a", "q", "\"", 2, "B", "R", "b", "r", "#", 3, "C", "S", "c", "s", "$", 4, "D", "T", "d", "t", "%", 5, "E", "U", "e", "u", "&", 6, "F", "V", "f", "v", "'", 7, "G", "W", "g", "w", "(", 8, "H", "X", "h", "x", ")", 9, "I", "Y", "i", "y", "*", ":", "J", "Z", "j", "z", "+", ";", "K", "[", "k", "{", ",", "L", "\\", "l", "|", "-", "=", "M", "]", "m", "}", ".", ">", "N", "^", "n", "~", "/", "?", "O", "_", "o", 0, "P", "p" ]
upper_case_p_items = [ "A", "Q", "B", "R", "C", "S", "D", "T", "E", "U", "F", "V", "G", "W", "H", "X", "I", "Y", "J", "Z", "K", "L", "M", "N", "O", "P" ]
lower_case_p_items = [ "a", "q", "b", "r", "c", "s", "d", "t", "e", "u", "f", "v", "g", "w", "h", "x", "i", "y", "j", "z", "k", "l", "m", "n", "o", "p" ]
special_p_items = [ "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", ":", "+", ";", "[", "{", ",", "\\", "|", "-", "=", "]", "}", ".", ">", "^", "~", "/", "?", "_" ]
numeric_p_items = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ]

// The tellme function is the only function included here. The code is not veriy long to split this up into several
// functions. The tellme  function does the following it collects the password length and make sure it is with in the 
// the allowable password length limit, it collection the selection made by the use according to character type or types
// chosen, it then iterates over the or several character types finally displays the out to the user screen so that user
// can cut and paste the password for there own use.

// I also left several debbuigging code in place and active so that you can have prrof of how the password gets generated
// according to specifications.

   function tellme()
      {
       document.getElementById("ta").innerHTML = "         Please enter a password length between 8 and 128 inclusive.";
       alert('This utilitiy will build a randomized password. The randomized password can be composed of all are any of the following types:\nCharacers: A-Z and a-z or Numeric: 0-9\nPunctuation characters: ~`@#$%^&*()_+|\{}[]:\";\'<>?,./\n\nYou willl be asked via a series of prompts to select which character types you would like to appear in the generated password. Press -OK- to include a type or -Cancel- to exclude a type.\n   Have Fun!!')

       user_p_length = prompt( "Please enter number between 1 and 128 I will use this numbewr to generate the size of the password" );

       if ( ( user_p_length >= 8 ) && ( user_p_length <= 128 ) )
         {
          console.log( "Thank you for entering a valid password size of = " + user_p_length );
          total_p_length = user_p_length;
         }
        else
          {
          alert( 'Please enter a number between 8 and 128 for the password length = ' + user_p_length );
          return 0;
          }

       if ( confirm( "All Character Types -- Ok or Cancel" ) === true  )
         {
          console.log("All");
          selected_character_types[0] = all_character_types[0];
          console.log(selected_character_types[0]);
         }
        else
          {
           if ( confirm( "Upper Case -- Ok or Cancel" ) === true )
             {
              console.log("Upper");
              selected_character_types[0] = all_character_types[1];
             }

           if ( confirm( "Lower Case -- Ok or Cancel" ) === true )
             {
              console.log("Lower");
              selected_character_types[1] = all_character_types[2];
             }

           if ( confirm( "Special Characters -- Ok or Cancel " ) === true )
             {
              console.log("Special");
              selected_character_types[2] = all_character_types[3];
             }

           if ( confirm( "Numeric Character -- Ok or Cancel" ) === true )
             {
              console.log("Numeric");
              selected_character_types[3] = all_character_types[4];
             }
          }

       if ( selected_character_types.length === 0 )
         {
          alert( 'Zero character Types were selected. Please press F5 to start over.\nThank you for your support,\n    Angel Sosa' );
          return 0;
         }

       console.log( "total_p_length = " + total_p_length );


       for ( j = 0; j < total_p_length; j++ )
          {
           switch( selected_character_types[ Math.floor( Math.random() * selected_character_types.length ) ] )
              {
               case "all":
                 enx += all_p_items[ Math.floor((Math.random() * 88 ) + 1 ) ]
                 //console.log( "I see all" );
                 break;
               case "upper":
                 //console.log( "I see upper" );
                 enx += upper_case_p_items[ Math.floor((Math.random() * 25 ) + 1 ) ]
                 break;
               case "lower":
                 //console.log( "I see lower" );
                 enx += lower_case_p_items[ Math.floor((Math.random() * 25 ) + 1 ) ]
                 break;
               case "special":
                 //console.log( "I see special" );
                 enx += special_p_items[ Math.floor((Math.random() * 28 ) + 1 ) ]
                 break;
               case "numeric":
                 //console.log( "I see numeric" );;
                 enx += numeric_p_items[ Math.floor((Math.random() * 9 ) + 1 ) ]
                 break;
               case undefined:
                 j = j - 1
                 break;
               default:
                 console.log( "I see default" )
                 break;
              }
          }

       document.getElementById("ta").innerHTML = enx;
       selected_character_types = [];
       console.log( "enx length = " + enx.length );
       console.log( "enx is = " + enx );
       total_p_length = 0;
       user_p_length = 0;
       enx = "";
   }
