/*
  This script handles the initialization of the calendar,
  and the rendering of event cards when hovering or clicked in mobile mode
*/
$(function() {
  console.log('loading calendar');
  $('#calendar').fullCalendar({
    themeSystem: 'jquery-ui',
    googleCalendarApiKey: 'AIzaSyCBwYKAqvh2LG_hhO8FAXTBPxyHX16TmMI',
    events: {
      googleCalendarId: 'uci.edu_tjec7ma8ubkrlhhbjk89u7c7ec@group.calendar.google.com',
      className: 'gcal-event', // an option!
    },
    eventColor: '#455a64',
    header: {
      left: 'prev',
      center: 'title',
      // right: 'month,agendaWeek,agendaDay'
      right: 'next',
    },
    editable: false,

    // Listener for mobile device functionality
    // Adds a click listener to render an event card
    // event is an actual event object with event data
    eventClick: function(event, jsEvent) {
      console.log(event.start.format('h:mm:ss a'));
      console.log(event.end.format('h:mm:ss a'));
      console.log('Event: ' + event.title);
      console.log(event.location);

      // build a new card with event data clicked on
      const tooltip = buildToolTip(event);

      // set delay before centering element center on the screen
      setTimeout(() => {
        $('body').append(tooltip);
        $('.tool-tip-event').css('position', 'fixed');
        $('.tool-tip-event').css(
          'top',
          $(window).height() / 2 - $('.tool-tip-event').outerHeight() / 2
        );
        $('.tool-tip-event').css(
          'left',
          $(window).width() / 2 - $('.tool-tip-event').outerWidth() / 2
        );
      }, 50);
    },

    // Listener for mouse pointer hover for laptop/desktops
    // Adds a hover listener when cursor is over event
    // event is an actual event object with event data
    eventMouseover: function(event, jsEvent) {
      // build a new card with event data clicked on
      const tooltip = buildToolTip(event);

      // remove the current tool-tip element if one exist before adding
      $('.tool-tip-event').remove();
      $('body').append(tooltip);

      // render the event offset to the current mouse location
      $(this)
        .mouseover(function(e) {
          $(this).css('z-index', 10000);
          $('.tool-tip-event').fadeIn('2500');
          $('.tool-tip-event').fadeTo('10', 1.9);
        })
        .mousemove(function(e) {
          $('.tool-tip-event').css('top', e.pageY - 150);
          $('.tool-tip-event').css('left', e.pageX - 120);
        })
        // This event is triggered when cursor moves away from event element
        // NOT when cursor moves away from the tooltip
        .mouseout(function(e) {
          // console.log("moving from event");
        });
    },
    // This event is triggered when the cursor moves away from the event title in the day(ex.monday square)
    // NOT when cursor moves away from the tooltip
    eventMouseout: function(event, jsEvent) {
      // console.log("mouseout of event");
    },
  });

  let element = $(document)
    .find('.fc-next-button')
    .append('<i class="material-icons">keyboard_arrow_right</i>');
  element = $(document)
    .find('.fc-prev-button')
    .append('<i class="material-icons">keyboard_arrow_left</i>');
});
/*
      handles removing the event when mouse leaves the content box (laptops/desktops)
      binds a mouseleave event to the parent document and removes all elements
      with the .tool-tip-event class
    */
$(document).on(
  {
    mouseleave: function() {
      $('.tool-tip-event').remove();
    },
  },
  '.tool-tip-event'
);

/*
      Removes the calendar event if user clicks anywhere on the screen
      primarily for mobile use
      for mobile devices
    */
$('body').click(function() {
  if ($('.tool-tip-event')[0]) {
    console.log('tool tip removed');
    $('.tool-tip-event').remove();
  }
});

// append the material style arrows to the calendar
$('.fc-prev-button').append('<i class="material-icons">keyboard_arrow_left</i>');
$('.fc-next-button').append('<i class="material-icons">keyboard_arrow_right</i>');

/*
      Build's the tooltip's content to be rendered
    */
function buildToolTip(event) {
  return `<div class="tool-tip-event card blue-grey darken-2 white-text z-depth-5 display-event arrow_box">
      <div class="card-content white-text">
        <h5 class="underline center bold">${event.title}</h5>
        <span class="location"><span class="bold">Start:</span> ${event.start.format(
          'h:mm:ss a'
        )} | <span class="bold">End</span> ${event.end.format('h:mm:ss a')}</br></span>
        <span class="location"><span class="bold">At:</span> ${
          event.location
        }</br></br></span>
        <p>${event.description}
        </p>
      </div>
    </div>`;
}
