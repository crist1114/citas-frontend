import { page } from '../page/cita-page';

describe('Pruebas para modulo de citas', () => {

  it('deberia agendar una cita', () => {
    page.irACitas();
    page.irAAgendarCita();
    page.llenarFormularioCita();
    page.agendarCita();
  })

  it('deberia confirmar una cita', () => {
    page.irACitas();
    page.irAConsultar();
    page.confirmarCita();
  })
})
