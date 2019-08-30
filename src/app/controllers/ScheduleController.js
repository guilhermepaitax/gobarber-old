import Appointment from '../models/Appointment';

class ScheduleController {
  async index(req, res) {
    return res.json({ ok: true });
  }
}

export default new ScheduleController();
