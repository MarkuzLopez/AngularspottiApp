import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(img: any[]): any {
    // si no exisste en el arereglo de imageness mandaar una imagen aux
    if (!img) {
      return 'assets/img/noimage.png';
    }

    // si el arreglo ess mayor a cero es decir si tiene img
    if (img.length > 0) {
        return img[0].url;
    } else {
      // si no existe imagenesss en el arreglo entoncess madnaar la imagen auxiliar
      return 'assets/img/noimage.png';
    }

    return null;
  }

}
