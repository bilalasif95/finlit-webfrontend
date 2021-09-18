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
        button {
           background: transparent;
           border: none;
           font-size: 19px;
           font-weight: 700;
           padding: 0px;
           width: auto;
           max-width: 10% !important;
           height: 12%;
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
   }
 }
`;

export default Wrapper;
