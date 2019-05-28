  import java.util.Scanner;
public class Main {

    public static void main(String[] args) {
        //System.out.println("Hello World!");
        Scanner sc = new Scanner(System.in);
        int a,b;
        a = sc.nextInt();
        b = sc.nextInt();
        int c;
        c = a % b;
        System.out.println(c);
        //return c;
    }
}
