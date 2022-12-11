export const page = {

  irACitas:()=>{
    cy.visit('http://localhost:4200/');
    cy.get('#citasTestButton').click();
  },

  irAAgendarCita:()=>{
    cy.get('#agendarTestButton').click();
    cy.intercept('GET', `http://localhost:8083/api/v1/cita/consultar-por-fecha/2022-11-14`, {
      statusCode: 200,
      body:
            [{
              id: 42,
              idPaciente: 123,
              tipoProcedimiento: 'LIMPIEZA',
              fecha: '2022-11-11',
              hora: '13:00:00',
              estado: 'NO_ATENDIDA',
              valor: 3500.00
            }]
    })},
    llenarFormularioCita:()=>{
      cy.intercept('GET', `http://localhost:8083/api/v1/paciente/1090493768`, {
        statusCode: 200,
        body:{
          id: '1090493768',
          nombre: "Cristian",
          tipoPaciente: "SUBSIDIADO"
        }
      })
      cy.get('#documentoInputTest').type('1090493768');

      cy.get('#selectTipoTest').click();
      cy.get('mat-option:first').click();
      cy.get('#valorInputTest').type('55000');
      cy.get('#horaSelectTest').click();
      cy.get('mat-option:first').click();

    },

    agendarCita:()=>{
      cy.get('#agendarButtonTest').click();
      cy.intercept('POST', `/api/v1/cita`,{statusCode: 201})
      cy.intercept('GET', 'http://localhost:8083/api/v1/cita/consultar', {
      statusCode: 200,
      body:
        [
          {
            "id": 42,
            "idPaciente": 123,
            "tipoProcedimiento": "LIMPIEZA",
            "fecha": "2022-11-14",
            "hora": "13:00:00",
            "estado": "NO_ATENDIDA",
            "valor": 3500.00
          }
        ],
    })
    },
    irAConsultar:()=>{
      cy.get('#consultarTestButton').click();
      cy.intercept('GET', 'http://localhost:8083/api/v1/cita/consultar', {
      statusCode: 200,
      body:
        [
          {
            "id": 42,
            "idPaciente": 123,
            "tipoProcedimiento": "LIMPIEZA",
            "fecha": "2022-11-14",
            "hora": "13:00:00",
            "estado": "NO_ATENDIDA",
            "valor": 3500.00
          }
        ],
    })
    },
    confirmarCita:()=>{
      cy.get('#confirmarTestButton').click();
      cy.intercept('POST', `/api/v1/cita/confirmar/`,{statusCode: 201});
      cy.intercept('GET', 'http://localhost:8083/api/v1/cita/consultar', {
      statusCode: 200,
      body:
        [
          {
            "id": 42,
            "idPaciente": 123,
            "tipoProcedimiento": "LIMPIEZA",
            "fecha": "2022-11-14",
            "hora": "13:00:00",
            "estado": "ATENDIDA",
            "valor": 3500.00
          }
        ],
    })
    }
}
