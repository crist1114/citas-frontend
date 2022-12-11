import { page } from '../page/paciente-page';

describe('Pruebas para modulo de pacientes', () => {
  it('deberia enlistar pacientes', () => {

    page.irAMenuPacientes();
    page.irAConsultar();
  });

  it('deberia buscar un paciente', () => {

    page.irAMenuPacientes();
    page.irAConsultar();
    page.buscarUnPaciente('12345');
  });

  it('deberia lanzar error usuario existe', () => {

    page.irAMenuPacientes();
    page.irARegistrar();
    page.llenarFormularioRegistroInvalido(1090493, 'cristian medina');
    page.obtenerError();
  });

  it('deberia registrar usuario', () => {
    page.irAMenuPacientes();
    page.irARegistrar();
    page.llenarFormularioRegistroValido(1090493768, 'cristian medina');
    page.registrar('#registrarTest');
  });

  it('deberia registrar historia', () => {
    page.irAMenuPacientes();
    page.irARegistrarHistoria();
    page.llenarFormularioHistoria(1090493768, new Date());
    page.registrarHistoria('#registrarButtonTest');
  });
});
