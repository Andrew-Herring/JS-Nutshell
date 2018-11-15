const filterEvent = (activeUser) => {
  document.querySelector("#eventDateFilter").addEventListener("click", function () {

          // Unhide everything
          $("div.event-entry").show();

          // Get the user's input date as an epoch
          const userInput = document.querySelector("#eventDate").value;
          const dateEpoch = new Date(userInput).getTime();

          // Filter all the events, hiding those LESS THAN this date.
          $("div.event-entry").filter(function() {

            // return parseInt($(this).attr("data-date")) < dateEpoch;
            const dataDate = $(this).attr("data-date");
            return parseInt(dataDate) < dateEpoch;
          }).hide();
        });
      }


        export { filterEvent }