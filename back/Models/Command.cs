using System.ComponentModel.DataAnnotations;

namespace Commander.Models

{
  public class Command
  {
    [Key]
    public int Id { get; set; }

    [Required]
    [MaxLength(250)]
    public string Nom { get; set; }

    [Required]
    public string Prenom { get; set; }

    [Required]
    public string Ville { get; set; }

    [Required]
    public string CNE { get; set; }

    [Required]
    public string Filiere { get; set; }

  }
}
