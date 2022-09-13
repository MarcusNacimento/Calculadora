using Microsoft.AspNetCore.Mvc;

namespace projeto_teste_mvc.Controllers
{
    public class CalculadoraController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Soma(int valor1, int valor2)
        {
            var total = valor1 + valor2;
            return Ok(total);
        }
        public IActionResult Subtrair(int valor1, int valor2)
        {
            var total = valor1 - valor2;
            return Ok(total);
        }
        public IActionResult Multiplicar(int valor1, int valor2)
        {
            var total = valor1 * valor2;
            return Ok(total);
        }
        public IActionResult Dividir(int valor1, int valor2)
        {
            var total = valor1 / valor2;
            return Ok(total);


        }
    }
}

