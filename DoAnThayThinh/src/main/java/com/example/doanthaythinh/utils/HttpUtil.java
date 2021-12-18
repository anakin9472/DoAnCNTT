package com.example.doanthaythinh.utils;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.BufferedReader;
import java.io.IOException;

public class HttpUtil {
    private String value;

    public HttpUtil(String value) {
        this.value = value;
    }

    public static HttpUtil of(BufferedReader reader) {
        StringBuilder sb = new StringBuilder();

        String line;
        try {
            while((line = reader.readLine()) != null) {
                sb.append(line);
            }
        } catch (IOException var3) {
            System.out.println(var3.getMessage());
        }

        return new HttpUtil(sb.toString());
    }

    public <T> T toModel(Class<T> tClass) {
        try {
            return (new ObjectMapper()).readValue(this.value, tClass);
        } catch (IOException var3) {
            System.out.println(var3.getMessage());
            return null;
        }
    }
}

