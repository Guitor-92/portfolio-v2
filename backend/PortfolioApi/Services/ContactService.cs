using PortfolioApi.DTOs;

namespace PortfolioApi.Services
{
    public class ContactService
    {
        public async Task<bool> SendContactEmailAsync(ContactRequestDto dto)
        {
            // Aqui você implementaria o envio real de e-mail (SMTP, SendGrid, etc)
            // Exemplo: apenas simula envio
            await Task.Delay(500);
            return true;
        }
    }
}