$(() => {

  const $resForm = $(`
  <form id="res-form" class="res-form">
      <p>Reservation</p>

      <div class="res-form__field-wrapper">
        <input type="text" name="property_id" id="property_id" value="1" readonly="readonly">
      </div>

      <div class="res-form__field-wrapper">
        <input type="date" name="start_date" placeholder="startdate">
      </div>

      <div class="res-form__field-wrapper">
          <input type="date" name="end_date" placeholder="enddate">
        </div>

      <div class="res-form__field-wrapper">
          <button>reserve</button>
          <a id="res-form__cancel" href="#">Cancel</a>
      </div>
    </form>
  `);

  window.$resForm = $resForm;

  $resForm.on('submit', function(event) {
    event.preventDefault();
    console.log("submit resform");
    const data = $(this).serialize();
    submitReservation(data)
      .then(json => {
        console.log(json);
        console.log(json.id);
        if (!json.id) {
          console.log("Error");
          views_manager.show('error', 'Failed to resver');
          return;
        }
        console.log("make resvervation-4");
        views_manager.show('listings');
      });
  });

  $('body').on('click', '#res-form__cancel', function() {
    views_manager.show('listings');
    return false;
  });
      
});