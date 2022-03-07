package com.larch.springboot01hello.controller;

import com.larch.springboot01hello.Exception.DException;
import com.larch.springboot01hello.entity.User;
import com.larch.springboot01hello.service.impl.TestService;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.*;
import java.util.concurrent.*;

@RestController
public class TestController extends BaseController{

    public static final int WEEK_DAY = 7;

    @Autowired
    private TestService testService;

    @RequestMapping("/test")
    public Boolean test() {
        try {
            Boolean productId = testService.getProductId();
            return productId;
        } catch (Exception e) {
            throw new DException("手动抛出的异常");
        }
    }

    public static void main(String[] args) {
//        HashMap<String, String> map = new HashMap<>();
//        map.put("test1","test001");
//        map.put("test2","test002");
//        System.out.println(map.get("test003"));
//       String tempCustomerIds = "";
//
//        String customerIds = tempCustomerIds.substring(0, tempCustomerIds.length() - 1);
//
//        System.out.println(customerIds);

//        SimpleDateFormat  format = new SimpleDateFormat("yyyy-MM-dd");
//        Calendar cal = Calendar.getInstance();
//        cal.setTime(new Date());
//        cal.add(Calendar.DAY_OF_MONTH,-WEEK_DAY);
//        String previousDate = format.format(cal.getTime());
//        System.out.println(previousDate);
//
//        List<Integer> integers = new ArrayList<Integer>();
//        integers.add(Integer.valueOf(122));
//        integers.add(Integer.valueOf(2222));
//        integers.add(Integer.valueOf(32222));
//        integers.add(Integer.valueOf(4222));
//        integers.add(Integer.valueOf(5333));
//        integers.remove(Integer.valueOf(5333));
//        integers.forEach(System.out::println);

//        ExecutorService pool = Executors.newSingleThreadExecutor();
//            pool.submit(() -> {
//                try {
//                    String test = pool.submit(() -> "test").get();
//                    System.out.println("test:" + test);
//                } catch (Exception e) {
//                    e.printStackTrace();
//                }
//            });
//        System.out.println("----------------------------" + Thread.currentThread().getName());
////        pool.shutdown();
//
//        LinkedBlockingQueue<Task> bq = new LinkedBlockingQueue<>();
//
//        String t = "2021-09-28";
//        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
//        try {
//            Date parse = format.parse(t);
//            String startdate = format.format(parse);
//            System.out.println(startdate);
//        } catch (ParseException e) {
//            e.printStackTrace();
//        }
        TestController testController = new TestController();
        try {
            testController.test01(1);
        } catch (DException e) {
            System.out.println("这是一条异常！"+ e.getMessage());
        }

        System.out.println("测试");
    }

    private void test01(int num) {
    }


    @org.junit.Test
    public void test01() {
        int[] a = new int[]{1,2,3,3,3,5,6};
        System.out.print(this.bsearch4(a, a.length, 3));
    }

    @Test
    public void test02() {
        // 初始大小 装载因子 按照访问时间排序
        LinkedHashMap<Integer, Integer> linkedHashMap = new LinkedHashMap<Integer, Integer>(10,0.75f,true);
        linkedHashMap.put(1,10);
        linkedHashMap.put(2,20);
        linkedHashMap.put(5,50);
        linkedHashMap.put(3,30);
        linkedHashMap.put(5,50);
        linkedHashMap.get(2);


        Iterator<Map.Entry<Integer, Integer>> iterator = linkedHashMap.entrySet().iterator();
        while (iterator.hasNext()) {
            Map.Entry<Integer, Integer> next = iterator.next();
            Integer key = next.getKey();
            Integer value = next.getValue();
            System.out.println("Key:" + key + " value:" + value);
        }

    }

    @Test
    public void test04() {
        User user = new User();
        this.longTest(user);
        if (user.getId() == 1) {
            System.out.println(11);
        }
        System.out.println(user.toString());
    }

    private long longTest(User user) {
        return user.getId();
    }

    /**
     *
     * @param a 数组
     * @param low 数组开始下标
     * @param high 数组结束下标
     * @param value
     * @return
     */
    private int bsearchInternally(int[] a, int low, int high, int value) {
        if (low > high) {
            return -1;
        }
        int mid = low + ((high - low) >> 1);
        if (value == a[mid]) {
            return mid;
        } else if (value < a[mid]) {
            return this.bsearchInternally(a, low, mid - 1, value);
        } else {
            return this.bsearchInternally(a, mid + 1, high, value);
        }
    }

    /**
     * 变形方式一
     */
    private int bsearch1(int[] a, int n, int value) {
        int low = 0;
        int high = n -1;
        while (low <= high) {
            int mid = low + ((high - low) >> 1);
            if (value < a[mid]) {
                high = mid - 1;
            } else if (value > a[mid]) {
                low = mid + 1;
            } else {
                // 如果mid=0 则表示已经是第一个元素了
                if (mid == 0 || a[mid-1] != value) {
                    return mid;
                } else {
                    high = mid - 1;
                }
            }
        }
        return -1;
    }

    private int bsearch2(int[] a, int n, int value) {
        int low = 0;
        int high = n - 1;
        while (low <= high) {
            int mid = low + ((high - low) >> 1);
            if (value < a[mid]) {
                high = mid - 1;
            } else if (value > a[mid]) {
                low = mid + 1;
            } else {
                if (mid == n - 1 || a[mid + 1] != value) {
                    return mid;
                } else {
                    low = mid + 1;
                }
            }
        }
        return - 1;
    }

    //查找第一个大于等于给定值的元素
    private int bsearch3(int[] a, int n, int value) {
        int low = 0;
        int high = n - 1;
        while (low <= high) {
            int mid = low + ((high - low) >> 1);
            if (value > a[mid]) {
                low = mid + 1;
            } else {
                if (mid == 0 || a[mid - 1] < value) {
                    return mid;
                } else {
                    high = mid - 1;
                }
            }
        }
        return -1;
    }

    private int bsearch4(int[] a, int n, int value) {
        int low = 0;
        int high = n - 1;
        while (low <= high) {
            int mid = low + ((high - low) >> 1);
            if (value >= a[mid]) {
                if (mid == n -1 || a[mid + 1] > value) {
                    return mid;
                } else {
                    low = mid + 1;
                }
            } else {
                high = mid - 1;
            }
        }
        return -1;
    }
}
