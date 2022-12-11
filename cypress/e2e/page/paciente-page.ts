import * as moment from 'moment';

export const page = {
  irAMenuPacientes: () => {
    cy.visit('http://localhost:4200/');
    cy.get('#pacientesTestButton').click();
  },
  irAConsultar: () => {
    cy.get('#consultarTestButton').click();
    cy.intercept('GET', 'http://localhost:8083/api/v1/paciente/', {
      statusCode: 200,
      body:
        [
          {
            id: 123,
            nombre: "Cristian",
            tipoPaciente: "SUBSIDIADO"
          },
          {
            id: 1234,
            nombre: "manuel",
            tipoPaciente: "SUBSIDIADO"
          },
          {
            id: 12345,
            nombre: "manuel",
            tipoPaciente: "SUBSIDIADO"
          }
        ],
    })
    cy.get('table > tbody').children('tr').its('length').should('eq',3);
  },
  buscarUnPaciente: (id) => {
    cy.get('#pacienteTestInput').type(id);
    cy.get('table > tbody').children('tr').its('length').should('eq',1);
  },
  irARegistrar : ()=>{
    cy.get('#registrarTestButton').click();
  },
  llenarFormularioRegistroInvalido: (documento, nombre)=>{
    cy.get('#inputDocumentoTest').type(documento);
    cy.intercept('GET', `http://localhost:8083/api/v1/paciente/${documento}`, {
      statusCode: 200,
      body:
        [
          {
            id: documento,
            nombre: "Cristian",
            tipoPaciente: "SUBSIDIADO"
          }
        ],
    })
    cy.get('#inputNombreTest').type(nombre);
    cy.get('#contributivoCheckTest').click();
  },
  obtenerError: ()=>{
    cy.get('#yaExisteTest').contains('ya existe');
  },
  llenarFormularioRegistroValido: (documento, nombre)=>{

    cy.intercept('GET', `http://localhost:8083/api/v1/paciente/${documento}`, {
      statusCode: 200,
      body: null,
    });
    cy.get('#inputDocumentoTest').type(documento);
    cy.get('#inputNombreTest').type(nombre);
    cy.get('#contributivoCheckTest').click();
  },
  registrar: (id)=>{
    cy.get(id).click();
    cy.intercept('POST', `/api/v1/paciente`,{statusCode: 201})
  },
  irARegistrarHistoria:()=>{
    cy.get('#registrarHistoriaTestButton').click();
  },
  llenarFormularioHistoria: (documento, fechaEmision:Date)=>{

    cy.intercept('GET', `http://localhost:8083/api/v1/paciente/${documento}`, {
      statusCode: 200,
      body: {},
    });
    cy.get('#documentoInputTest').type(documento);
    cy.get('#fechaEmisionInputTest').type(moment(fechaEmision).format('YYYY-MM-DD'));
    cy.get('#ubicacionSelectTest').click();
    cy.get('mat-option:first').click();
  },
  registrarHistoria: (id)=>{
    cy.get(id).click();
    cy.intercept('POST', `/api/v1/historia`,{statusCode: 201})
  }

};
