using PortfolioApi.DTOs;

namespace PortfolioApi.Services
{
    public class ContactService
    {
        public async Task<bool> SendContactEmailAsync(ContactRequestDto dto)
        {
            try
            {
                var smtpHost = Environment.GetEnvironmentVariable("SMTP_HOST");
                var smtpPortStr = Environment.GetEnvironmentVariable("SMTP_PORT") ?? "587";
                var smtpUser = Environment.GetEnvironmentVariable("SMTP_USER");
                var smtpPass = Environment.GetEnvironmentVariable("SMTP_PASS");
                var smtpFrom = Environment.GetEnvironmentVariable("SMTP_FROM") ?? smtpUser;

                if (string.IsNullOrWhiteSpace(smtpHost) || string.IsNullOrWhiteSpace(smtpPortStr) || string.IsNullOrWhiteSpace(smtpUser) || string.IsNullOrWhiteSpace(smtpPass) || string.IsNullOrWhiteSpace(smtpFrom))
                {
                    // Log de erro opcional
                    return false;
                }

                int smtpPort = int.Parse(smtpPortStr);

                using var client = new System.Net.Mail.SmtpClient(smtpHost, smtpPort)
                {
                    Credentials = new System.Net.NetworkCredential(smtpUser, smtpPass),
                    EnableSsl = true
                };

                var mail = new System.Net.Mail.MailMessage();
                mail.From = new System.Net.Mail.MailAddress(smtpFrom);
                mail.To.Add(smtpUser); // envia para você mesmo
                mail.Subject = $"Novo contato de {dto.Name}";
                mail.Body = $"Nome: {dto.Name}\nEmail: {dto.Email}\nMensagem: {dto.Message}";

                await client.SendMailAsync(mail);
                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}