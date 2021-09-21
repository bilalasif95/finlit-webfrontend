import styled from 'styled-components';

const Wrapper = styled.div`
 .calendar-cont {
   h3 {
    color: #484848;
    font-size: 21px;
    margin-bottom: 30px;
   }
   .react-calendar {
     .react-calendar__navigation {
       .react-calendar__navigation__prev2-button, .react-calendar__navigation__next2-button {
          display: none;
       }
       .react-calendar__navigation__prev-button, .react-calendar__navigation__next-button, .react-calendar__navigation__label {
          border: none;
          background: transparent;
          color: #8b8b8b;
       }
       .react-calendar__navigation__prev-button, .react-calendar__navigation__next-button {
         font-size: 40px;
         padding: 1px 0px
       }
       }
     }
     .react-calendar__viewContainer {
       .react-calendar__month-view__weekdays {
         abbr {
           text-decoration: none;
           color: #484848;
         }
       }
      .react-calendar__month-view__days {
        margin-top: 17px;
        gap: 12px;
        button {
           background: transparent;
           border: none;
           font-size: 19px;
           font-weight: 700;
           padding: 0px;
           width: auto;
           max-width: 10% !important;
           height: 32px;
           &:focus {
             background: #46a135;
             box-shadow: 0px 3px 6px #00000029;
             border-radius 100%;
             abbr {
              color: #fff !important;
             }
           }
           abbr {
            color: #484848 !important;
           }
        }
      }
      .react-calendar__year-view__months, .react-calendar__decade-view__years, .react-calendar__century-view__decades {
        justify-content: center;
        .react-calendar__year-view__months__month, .react-calendar__decade-view__years__year, .react-calendar__century-view__decades__decade {
          border: none;
          background: transparent;
          color: #8b8b8b;
          background-color: #ececeb;
          margin: 5px;
        }
      }
   }
 }
 .main {
    border-bottom: 1px solid #e6e6e6;
    padding-bottom: 31px;
    margin-bottom: 26px;
 }
 .Events-cont {
   h3 {
    font-size: 21px;
    color: #484848;
    margin-bottom: 5px;
   } 
   >p {
    color: #8B8B8B;
    font-size: 15px;
    margin-bottom: 31px;
   }
   .Events-main {
     display: flex;
     justify-content: space-between;
     align-items: center;
     margin-bottom: 28px;
     .textbox {
       h5 {
         font-size: 21px;
         color: #484848;
         margin-bottom: 6px;
       }
       p {
        color: #8B8B8B;
       }
     }
     .circle {
       background: #225f2B;
       height: 34px;
       width: 34px;
       border-radius: 50px;
       color: #ffffff;
       font-size: 19px;
       display: flex;
       align-items: center;
       justify-content: center;
       box-shadow: 0px 3px 6px;
     }
     .Time {
      color: #8b8b8b;
     }
   }
 }
`;

export default Wrapper;
