package org.example.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
public abstract class Tarea {
    // variables
    private int id;
    private String titulo;
    private Prioridad prioridad;
    private String fecha;
    private String descripcion;

    // constructores

    public Tarea(){
        this.fecha = "01/01/20";
        this.prioridad = Prioridad.Baja;
    }
    public Tarea(int id, String titulo) {
        this.id = id;
        this.titulo = titulo;
        this.fecha = "01/01/20";
        this.prioridad = Prioridad.Baja;
    }
    public Tarea(int id, String titulo, Prioridad prioridad, String descripcion) {
        this.id = id;
        this.titulo = titulo;
        this.prioridad = prioridad;
        this.descripcion = descripcion;
        this.fecha = "01/01/20";
    }

    public void mostrarDatos(){
        System.out.println("id: "+id);
        System.out.println("titulo: "+titulo);
        System.out.println("desc: "+descripcion);
        System.out.println("prior: "+prioridad);
        System.out.println("fecha: "+fecha);
    }

    @Override
    public String toString() {
        return "Tarea{" +
                "id=" + id +
                ", titulo='" + titulo + '\'' +
                ", prioridad='" + prioridad + '\'' +
                ", fecha='" + fecha + '\'' +
                ", descripcion='" + descripcion + '\'' +
                '}';
    }
}