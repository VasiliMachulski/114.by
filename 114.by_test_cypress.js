describe('114.by_test_cypress', () => {
  it('Does not do much!', () => {
      cy.visit('https://114.by/')
      // В модуле есть поля "Откуда", "Куда", "Когда", кнопки "Смена направлений" и "Искать"
      cy.get('[placeholder="введите откуда выезжаем"]');  
      cy.get('[placeholder="введите куда приезжаем"]');
      cy.get('[placeholder="Сегодня"]');
      cy.get('a[class=btn-replace-2]');
      cy.get('.btn.btn-green.btn-block.hidden-xs');
      // При заполненных полях "Откуда", "Куда", "Дата" показывает расписание соответствующее введенным параметрам
      cy.visit('https://114.by/')
      cy.get('[placeholder="введите откуда выезжаем"]').type('МИНСК АС-ЮгоЗападная');
      cy.get('.list-group-item').click();
      cy.get('[placeholder="введите куда приезжаем"]').type('Дубенцы');
      cy.get('.list-group').click();                    
      cy.get('.vdp-datepicker > .input-group > .form-control').click()
      cy.get('div > :nth-child(42)').click();
      cy.get('.btn.btn-green.btn-block.hidden-xs').click();
      //При нажатии на кнопку "Смены направлений" меняются местами пункты отправления и пункт назначения
      cy.visit('https://114.by/')
      cy.get('[placeholder="введите откуда выезжаем"]').type('МИНСК АС-ЮгоЗападная');
      cy.get('.list-group-item').click();
      cy.get('[placeholder="введите куда приезжаем"]').type('Дубенцы');
      cy.get('.list-group').click();
      cy.get(':nth-child(1) > .form-group > .btn-replace-2').click();   
    })
})