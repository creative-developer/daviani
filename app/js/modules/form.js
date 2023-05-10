const getData = element => {
  const currentElement = $(element);

  const name = currentElement.attr('data-field') || '';
  const title = currentElement.attr('data-name') || '';
  const value = currentElement.attr('data-value') || '';

  return { name, title, value };
};

export const initForm = () => {
  let additionalFormData = {};

  $('.js-popup-additional').on('click', e => {
    additionalFormData = {};
    const currentElement = $(e.currentTarget);

    const data = getData(currentElement);

    if (data.name && data.title) {
      additionalFormData[data.name] = { title: data.title, value: data.value };
    }
  });

  // // E-mail Ajax Send
  $('form').submit(function (e) {
    e.preventDefault();

    let form = $(this);
    let formData = {};
    formData.data = { ...additionalFormData };

    // Serialize
    form.find('input, textarea').each(function () {
      let name = $(this).attr('name');
      let title = $(this).attr('data-name');
      let value = $(this).val();

      formData.data[name] = {
        title: title,
        value: value,
      };

      if (name === 'subject') {
        formData.subject = {
          value: value,
        };
        delete formData.data.subject;
      }
    });

    $.ajax({
      type: 'POST',
      url: 'mail/mail.php',
      dataType: 'json',
      data: formData,
    }).done(function (data) {
      if (data.status === 'success') {
        if (form.closest('.mfp-wrap').hasClass('mfp-ready')) {
          form.find('.form-result').addClass('form-result--success');
          ym(93510853, 'reachGoal', 'lead-ukladka');
        } else {
          mfpPopup('#success');
        }

        setTimeout(function () {
          if (form.closest('.mfp-wrap').hasClass('mfp-ready')) {
            form.find('.form-result').removeClass('form-result--success');
          }

          $.magnificPopup.close();
          form.trigger('reset');
          additionalFormData = {};
        }, 3000);
      } else {
        alert('Ajax result: ' + data.status);
      }
    });
    return false;
  });
};
