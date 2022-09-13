using Microsoft.AspNetCore.Mvc;

namespace projeto_teste_mvc.Controllers
{
    public class CidadeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
