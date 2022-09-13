using Microsoft.AspNetCore.Mvc;

namespace projeto_teste_mvc.Controllers
{
    public class HomeController1 : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
